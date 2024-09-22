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

--from many to many lesson no.-259--
SELECT title
FROM class
JOIN enrollment AS e1 ON e1.class_id = class.id
JOIN student AS s1 ON e1.student_id = s1.id
JOIN enrollment AS e2 ON e2.class_id = class.id
JOIN student AS s2 ON e2.student_id = s2.id
WHERE s1.first_name = 'Angela' AND s2.first_name = 'Jack';
