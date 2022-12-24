drop database music;
create database music;
use music;

create table albums (
	id int primary key auto_increment,
    album varchar(100) not null,
    year_ int not null,
    band_id int not null
);

create table bands(
	band_id int primary key auto_increment,
    band varchar(100) not null
);

insert into albums
	(album, year_, band_id)
values
	("Master of Reality", 1971, 1),
    ("Led Zeppelin II", 1969, 2),
    ("Paranoid", 1970, 1),
    ("Audioslave", 2002, 3);

insert into bands
	(band)
values
	("Black Sabbath"),
    ("Led Zeppelin"),
    ("Audioslave");
    
select albums.band_id, bands.band
from albums
join bands
on albums.band_id = bands.band_id;