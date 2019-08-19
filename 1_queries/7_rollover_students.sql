SELECT students.name AS students_name, students.start_date AS students_start_date, cohorts.name AS cohorts_name, cohorts.start_date AS cohorts_start_date
FROM students
LEFT JOIN cohorts ON students.cohort_id = cohorts.id
WHERE students.start_date <> cohorts.start_date
ORDER BY cohorts_name;