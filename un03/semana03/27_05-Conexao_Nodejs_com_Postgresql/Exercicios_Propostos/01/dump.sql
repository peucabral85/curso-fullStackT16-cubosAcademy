create database biblioteca;

create table autores (
  id serial primary key,
  nome text not null,
  idade integer
);
  
create table livros (
	id serial primary key,
  nome text not null,
  genero varchar(100),
  editora varchar(100),
  data_publicacao date,
  autor_id integer references autores(id)
);  
