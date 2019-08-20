const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
//   .then(res => {
//     console.log(res.rows);
//   })
//   .catch(err => console.error('query error', err.stack));

const argvParameters = process.argv.splice(2);
const cohortParam = argvParameters[0];
const limitQuery = Number(argvParameters[1]);


pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${cohortParam}%'
LIMIT ${limitQuery};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));
