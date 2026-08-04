CREATE TABLE IF NOT EXISTS bugs (

id SERIAL PRIMARY KEY,

title VARCHAR(255) NOT NULL,

description TEXT NOT NULL,

priority VARCHAR(20) NOT NULL,

status VARCHAR(20) NOT NULL,

assigned_to VARCHAR(100),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO bugs
(title,description,priority,status,assigned_to)

VALUES

(
'Login API returns 500',
'Internal server error during login.',
'High',
'Open',
'Backend Team'
),

(
'Navbar overlaps content',
'UI issue on mobile devices.',
'Medium',
'In Progress',
'Frontend Team'
),

(
'Profile image upload fails',
'PNG uploads are rejected.',
'High',
'Open',
'Backend Team'
),

(
'Search is slow',
'Search takes more than 6 seconds.',
'Low',
'Open',
'Database Team'
),

(
'Forgot Password Email Missing',
'Reset email never arrives.',
'Critical',
'Open',
'Backend Team'

);