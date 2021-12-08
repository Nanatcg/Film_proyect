create database film_proyect;

use film_proyect;


create table Genre (
	id INT NOT NULL auto_increment, 
    name varchar(40) NOT NULL,
    PRIMARY KEY(id)
);


create table Film (
	id INT NOT NULL auto_increment, 
    name varchar(80) NOT NULL,
    Director varchar(60) NOT NULL,
    idGenre INT NOT NULL,
    Description varchar(200) NULL,
    type varchar(1) NOT NULL,
    year varchar(4) NOT NULL,
    Review varchar(65535) NULL,
    Score varchar(1) NULL,
    FOREIGN KEY (idGenre) REFERENCES Genre(id),
    PRIMARY KEY(id)
);

create table Favorites (
    id INT NOT NULL auto_increment,
    idFild INT NOT NULL,
    FOREIGN KEY(idFild) REFERENCES Film(id),
    PRIMARY KEY(id)
);