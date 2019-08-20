const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2]}'
ORDER BY teacher;
`).then(res => {
  res.rows.forEach(result => {
    console.log(`${result.cohorts}: ${result.teacher}`);
  });
}).catch(err => {
  console.log(err)
});