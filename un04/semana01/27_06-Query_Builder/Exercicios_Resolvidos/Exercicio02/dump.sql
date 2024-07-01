-- create database exercicio_query_builder;

create table usuarios(
	id serial primary key,
    nome text not null,
    email text not null,
    senha text not null
);