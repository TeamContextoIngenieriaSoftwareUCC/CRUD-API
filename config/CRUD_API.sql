create database CRUD_API;
use CRUD_API;

create table users (
	id_user int auto_increment,
	name varchar(255),
	email varchar(255) not null unique,
	password varchar(255) not null,
	primary key(id_user)
);