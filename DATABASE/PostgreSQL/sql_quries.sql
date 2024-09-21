create table capitals(
   id serial primary key,
   country varchar(45),
   capital varchar(45)
);

create table flags(
   id serial primary key,
   name varchar(45),
   flag char(2)
);

create table visited_countries(
   id serial primary key,
   country_code char(2)
);
