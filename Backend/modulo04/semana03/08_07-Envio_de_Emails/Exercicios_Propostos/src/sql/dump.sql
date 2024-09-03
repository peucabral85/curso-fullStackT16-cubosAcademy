create table usuarios(
    id serial primary key,
    nome varchar(150) not null,
    email varchar(150) not null unique
);