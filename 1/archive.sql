create database archive;
use archive;

create table movies(
	id int primary key auto_increment,
    title varchar(100) not null,
    year_ int,
    director varchar(100) not null
);

insert into movies 
	(title, year_, director)
values
	("The Matrix", 1999, "Larry and Andrew Wachowski"),
    ("Forest Gump", 1994, "Robert Zemeckis"),
    ("The Godfather", 1972, "Fracis Ford Coppola"),
    ("Cast Away", 2000, "Robert Zemeckis");

update movies
set director = "Lana и Lilly Wachowsky"
where id = 1;

delete from movies 
where director = "Robert Zemeckis" and (year_ >= 1990 and year_ < 2000);
   
select * from movies;
