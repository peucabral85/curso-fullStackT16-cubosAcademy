create database ecommerce;

create table categorias (
  id serial primary key,
  nome varchar(50) not null
);

create table produtos (
  id serial primary key,
  nome varchar(100) not null,
  descricao text,
  preco integer not null,
  quantidade_em_estoque integer not null,
  categoria_id integer references categorias(id)
);

create table clientes (
  cpf char(11) unique,
  nome varchar(150) not null
);

create table vendedores (
  cpf char(11) unique,
  nome varchar(150) not null
);

create table pedidos (
  id serial primary key,
  valor integer not null default 0,
  cliente_cpf char(11) references clientes(cpf),
  vendedor_cpf char(11) references vendedores(cpf)
);

create table itens_do_pedido (
  id serial primary key,
  pedido_id integer references pedidos(id),
  quantidade integer not null,
  produto_id integer references produtos(id)
);

-- Exercício 1
insert into 
categorias (nome) 
values ('frutas'),
('verduras'),
('massas'),
('bebidas'),
('utilidades');

-- Exercício 2
insert into 
produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id)
values
('Mamão', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras.',	90,	34,	1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.',	50,	76,	2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata',	'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700,	12,	4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',	1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000,	44,	5),
('Balde para lixo 50l',	'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva',	'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

-- Exercício 3
insert into clientes (cpf, nome) values
('80371350042',	'José Augusto Silva'),
('67642869061',	'Antonio Oliveira'),
('63193310034',	'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');

--Exercício 4
insert into vendedores (cpf, nome) values
('82539841031', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

-- Exercício 5
-- Function e Trigger criadas para realizar a atualização do estoque e do valor total do pedido
-- após insert na tabela itens_do_pedido.
create or replace function atualiza_pedido_estoque() returns trigger 
as $$
declare
	valor_item integer;
  qtde integer;
begin
	select quantidade_em_estoque from produtos where id = new.produto_id into qtde;
  
  if qtde < new.quantidade then
  	raise exception 'Quantidade indisponível em estoque.';
  else
		select sum(p.preco * new.quantidade) as valor 
  	from produtos p 
  	where p.id = new.produto_id into valor_item; -- calcula o valor total do item no pedido
  
  	update pedidos set valor = valor + valor_item 
    where pedidos.id = new.pedido_id; -- atualiza o valor do pedido
  
		update produtos set quantidade_em_estoque = quantidade_em_estoque - new.quantidade
  	where produtos.id = new.produto_id; -- atualiza o estoque dos itens
  end if;
  return new;
end;  
$$ language 'plpgsql';

create trigger atualizaPedidoEstoque
before insert
on itens_do_pedido
for each row
execute procedure atualiza_pedido_estoque();

-- Letra A
insert into pedidos (cliente_cpf, vendedor_cpf)
values
('80371350042','28007155023');

insert into itens_do_pedido (pedido_id, quantidade, produto_id)
values
(1,1,1),
(1,1,10),
(1,6,11),
(1,1,15),
(1,5,2);

-- Letra B
insert into pedidos (cliente_cpf,vendedor_cpf)
values
('63193310034','23262546003');

insert into itens_do_pedido (pedido_id,quantidade,produto_id)
values
(2,10,17),
(2,3,18),
(2,5,1),
(2,10,5),
(2,2,6);

-- Letra C
insert into pedidos (cliente_cpf,vendedor_cpf)
values
('75670505018','23262546003');

insert into itens_do_pedido (pedido_id,quantidade,produto_id)
values
(3,1,13),
(3,6,12),
(3,5,17);

-- Letra D
insert into pedidos (cliente_cpf,vendedor_cpf)
values
('75670505018','82539841031');

insert into itens_do_pedido (pedido_id,quantidade,produto_id)
values
(4,1,16),
(4,6,18),
(4,1,7),
(4,3,1),
(4,20,5),
(4,2,6);

-- Letra E
insert into pedidos (cliente_cpf,vendedor_cpf)
values
('67642869061','82539841031');

insert into itens_do_pedido (pedido_id,quantidade,produto_id)
values
(5,8,18),
(5,1,8),
(5,3,17),
(5,8,5),
(5,2,11);