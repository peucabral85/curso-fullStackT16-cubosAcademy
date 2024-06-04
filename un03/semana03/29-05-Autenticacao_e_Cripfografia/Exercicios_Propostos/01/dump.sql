create table usuarios(
	id serial primary key,
  nome varchar(150) not null,
  email varchar(150) not null unique,
  senha text not null
);

create table pokemons(
  id serial primary key,
  usuario_id int not null references usuarios(id),
  nome varchar(150) not null,
  habilidades text not null,
  imagem text,
  apelido varchar(150)
);