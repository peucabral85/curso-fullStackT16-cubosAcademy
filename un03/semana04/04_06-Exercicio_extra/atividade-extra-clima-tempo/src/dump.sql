-- create database clima_tempo;

create table ceps (
	id serial primary key,
  cep varchar(8) not null unique,
  cidade varchar(150) not null,
  bairro varchar(150),
  estado varchar(2),
  latitude double precision,
  longitude double precision
);

create table clima (
	id serial primary key,
  cep_id int not null references ceps(id),
  temperatura double precision,
  descricao text,
  data_hora timestamp
);

create table noticias(
	id serial primary key,
  cep_id int not null references ceps(id),
  titulo text,
  descricao text,
  url text,
  data_hora timestamp,
  foto_de_capa text
);
