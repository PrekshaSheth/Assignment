select * from students;

-- update
update students set age = 22 where id = 1;

select * from students;
-- create tables
create table customer(
cust_id integer primary key,
name varchar(20),
age int default 18,
city varchar(50),
salary int
);

desc customer;

create table order1(
order_id integer primary key,
cust_id integer,
amount integer,
foreign key (cust_id) references customer (cust_id)
);

desc order1;

create table product(
product_id integer primary key,
product_name varchar(30),
price integer
);

-- alter table

alter table order1
add column product_id integer;

ALTER TABLE Order1
ADD FOREIGN KEY (product_id) REFERENCES product(product_id);

ALTER TABLE order1
DROP COLUMN amount;

desc product;

-- insert values

insert into customer values(1,"Preksha",23,"Ahmedabad",30000),(2,"Kunjal",22,"vadodra",20000),(3,"Rutwik",23,"Ahmedabad",33000),(4,"Mohini",21,"rajkot",40000),(5,"neel",21,"rajkot",23000);
insert into order1 values(1,1,3000,1),(2,2,2000,1),(3,2,5000,2),(4,3,3000,3);
insert into product values(1,"Samsung j8",8000),(2,"MI note 9",18000),(3,"oneplus",40000),(4,"oppo",20000),(5,"vivo",25900);

select * from product;
select * from order1;
drop table order1;

-- join query
-- inner join

select * from order1 
inner join 
customer on order1.cust_id = customer.cust_id
inner join 
product on order1.product_id = product.product_id; 

-- left join

select * from order1 
left join 
customer on order1.cust_id = customer.cust_id
left join 
product on order1.product_id = product.product_id;

-- right join

select * from order1 
right join 
customer on order1.cust_id = customer.cust_id
right join 
product on order1.product_id = product.product_id;

-- full join

select * from order1 
left join 
customer on order1.cust_id = customer.cust_id
left join 
product on order1.product_id = product.product_id
union
select * from order1 
right join 
customer on order1.cust_id = customer.cust_id
right join 
product on order1.product_id = product.product_id;

-- cross join
select * from order1
cross join 
customer on order1.cust_id = customer.cust_id;

select customer.name, product.product_name, product.price from order1
 inner join
 customer on order1.cust_id = customer.cust_id
 inner join 
 product on order1.cust_id = product.product_id;


select customer.name, product.price from order1
 inner join
 customer on order1.cust_id = customer.cust_id
 inner join 
 product on order1.product_id = product.product_id;

-- alias

select p.price, c.name from  order1 o
 inner join 
 customer c on o.cust_id = c.cust_id
 inner join 
 product p on o.product_id = p.product_id;
 
select name as CustomerName from customer; 

delete from customer where cust_id = 5;


-- create view

select * from students;

create view stud_view 
as
select name,age from students;

select * from stud_view;

-- drop view

drop view stud_view;

-- procedures

delimiter $
create procedure getStudents()
begin
select * from students;
end $

call getStudents()$
-- procedures with parameter
create procedure getStudentswithParam(IN stu_age int)
begin
select * from students where age = stu_age;
end $

call getStudentswithParam(22)$

-- procedure with out variable

create procedure getStudentswithOUT(out cnt integer)
begin
select count(*) into cnt from students;
end $

call getStudentswithOUT(@student_count)$
select @student_count$

delimiter ;


