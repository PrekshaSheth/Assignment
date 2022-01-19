-- on UPDATE, on DALETE CASCADE

create table sale(
sale_id integer primary key,
cust_id integer,
order_id integer,
foreign key (cust_id) references customer (cust_id),
foreign key (order_id) references order1 (order_id)
on delete cascade
);

desc sale;
insert into sale values(1,4,3),(2,3,2),(3,2,2);
delete from order1 where order_id = 3;
select * from sale;
select * from order1;

create table dept(
dept_id integer primary key,
id integer,
foreign key (id) references students (id)
on update cascade
);
desc dept;
insert into dept values(1,1),(2,3),(3,4);
update students set id = 10 where id = 3;
select * from students;
select * from dept;

-- function
-- Scalar Function

select upper(name) as StudentName from students;
select lower(name) as StudentName from students;
select mid(name,2,3) as extracted_string from students;
select name, length(name) as Leength_of_Student from students;
select round(avg(price)) as RoundAverage from product;
select name As StudentName, now() as DateTime from students;
select name,format(now(),'YYYY-MM-DD') as date from students;

-- Aggregate Function

select price from product;
select count(*) as TotalProduct from product;
select avg(price) as AveragePrice from product;
select sum(price) as TotalPrice from product;
select min(price) as MinimumPrice from product;
select max(price) as MinimumPrice from product;

-- transaction
-- ROLLBACK , COMMIT
select * from students;

set autocommit = 0;
START TRANSACTION;
delete from students where name = "mohini";
update students set name = "Rakesh" where name = "mohini";

select * from students;
rollback;

select * from students;

commit;
select * from students;


-- GRANT , REVOKE

show grants for Preksha;
grant select,delete,update on students to Preksha;
revoke delete on students from  Preksha;


-- Error handling in stored procedure

delimiter $
create procedure insertSale(IN insale_id int, IN incust_id int, IN inorder_id int, OUT cnt int)
begin
DECLARE EXIT HANDLER FOR 1062
    BEGIN
 	SELECT CONCAT('Duplicate key (',insale_id,',',incust_id,',',inorder_id,') occurred') AS message;
    END;
    
    INSERT INTO sale(sale_id,cust_id,order_id)
    VALUES(insale_id,incust_id,inorder_id);
    
    SELECT COUNT(*) into cnt
    FROM sale
    WHERE sale_id = insale_id;
end $

call insertSale(1,2,2,@sale_count)$

select @sale_count$