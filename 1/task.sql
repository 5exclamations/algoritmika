create database task;
use task;

create table tasks(
	id int primary key auto_increment,
    task_description varchar(100) not null,
    due_date date,
    employee varchar(100),
    finished_date date
);

insert into tasks 
	(task_description, due_date, employee, finished_date)
values
	("create ER-diagram", "2020-05-20", "Alex", "2020-05-19"),
    ("connect node.js to mysql", "2020-05-13", "John", "2020-05-17"),
    ("create get-request handler /task", null, "Alex", "2020-04-15"),
    ("create post-request handler /task", "2020-04-05", "Donald", null),
    ("create sql-query for get tasks", null, "John", null),
    ("create sql-query for add task", "2020-03-04", "Martin", "2020-03-04"),
    ("configure server to auto deploy", "2020-03-12", null, null)