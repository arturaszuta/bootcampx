SELECT teachers.name as teacher, students.name as student, assignments.name as assignment, (assistance_requests.completed_at - assistance_requests.started_at) as duration

FROM teachers
LEFT OUTER JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
LeFT OUTER JOIN assignments ON assistance_requests.assignment_id = assignments.id
LEFT OUTER JOIN students ON assistance_requests.student_id = students.id
ORDER BY duration;
