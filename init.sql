create table product (
id serial primary key,
name varchar(100) not null unique,
value real not null
);
create table customer (
id serial primary key,
name varchar(50) not null,
email varchar(50) not null
);
create table ordered (
id serial primary key,
customer_id int not null,
product_id int not null,
order_date timestamp not null,
foreign key (customer_id) references customer(id),
foreign key (product_id) references product(id)
);