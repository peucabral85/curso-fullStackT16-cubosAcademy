drop table if exists postagens_curtidas;

drop table if exists postagens_comentarios;

drop table if exists postagens_fotos;

drop table if exists postagens;

drop table if exists usuarios;

create table usuarios (
	id serial primary key,
    nome text,
    username text not null unique,
    senha text not null,
    email text unique,
    telefone text,
    genero text,
    bio text,
    site text,
    imagem text,
    verificado boolean default false
);

create table postagens (
	id serial primary key,
	usuario_id int not null references usuarios (id),
	texto text,
	data timestamptz default now()
);

create table postagens_fotos (
	id serial primary key,
	postagem_id int not null references postagens (id),
	imagem text not null
);

create table postagens_comentarios (
	id serial primary key,
	usuario_id int not null references usuarios (id),
	postagem_id int not null references postagens (id),
	texto text not null,
	data timestamptz default now()
);

create table postagens_curtidas (
	usuario_id int not null references usuarios (id),
	postagem_id int not null references postagens (id),
	data timestamptz default now()
);