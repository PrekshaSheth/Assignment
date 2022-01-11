-- create database
create database DB;
use DB;

-- create table
CREATE TABLE students (
 id INTEGER PRIMARY KEY,
 name varchar(20) NOT NULL,
gender varchar(20),
age INTEGER default 18 
);

desc students;

-- alter table
Alter Table students add column email varchar(20);

desc students;

-- insert values
insert into students values(1,"preksha","F",19,"preksha@aimdek.com");

-- insert multiple values with default
insert into students values(2,"mohini","F",default,"mohini@aimdek.com"),(3,"rutwik","M",22,"rutwik@aimdek.com");
insert into students (id,name,age) values(4,"kunjal",22);
insert into students values(5,"neel","M",23,"neel@aimdek.com"),(6,"pradip","M",23,"pradip@aimdek.com"); 

-- select query
select * from students;

-- select with condition
select * from students where gender = "F";
select * from students where age=22 or age=23;
select * from students order by name;
select * from students order by name DESC;
select * from students where name like 'p%';
select * from students where name like '%a';
select * from students where name like 'p__ksha';
select * from students where name like 'p_%';
select distinct age from students;
select count(*),age from students group by age;









 





