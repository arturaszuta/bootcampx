SELECT SUM(assistance_requests.completed_at - assistance_requests.started_at) / COUNT(DISTINCT cohorts.name) as average_total_duration
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
JOIN assistance_requests ON students.id = assistance_requests.student_id;
