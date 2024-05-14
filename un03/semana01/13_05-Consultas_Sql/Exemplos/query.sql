-- Exemplos de consultas realizadas em aula

select * from musicas;

select id, ritmo, compositor from musicas;

select distinct compositor, composicao from musicas;

select * from musicas where tempo > 200 and tempo < 400;

select * from musicas where tempo between 200 and 400;

select * from musicas where compositor = 'Schubert' or compositor = 'Bach';

select * from musicas where compositor is null;

select * from musicas where compositor is not null;

select * from musicas limit 3;

select * from musicas offset 3;

select * from musicas limit 10 offset 0; -- página 1

select * from musicas limit 10 offset 10; -- página 2

select * from musicas limit 10 offset 20; -- página 3

select * from musicas where compositor = 'Schubert' order by id asc;

select * from musicas where compositor = 'Schubert' order by id desc;

select * from musicas order by compositor asc;

select * from musicas order by compositor desc;

select * from musicas order by compositor asc, composicao desc;

select * from musicas order by ritmo asc;

select * from musicas where composicao like 'Violin Sonata No 1 in G minor';

select * from musicas where composicao like '%in G minor';

select * from musicas where composicao like 'Violin Sonata%';

select * from musicas where composicao like '%Sonata%';

select * from musicas where composicao like '___no Sonata in A maj__';

select * from musicas where composicao like '___no Sonata%';

select * from musicas where composicao ilike 'piano Sonata in a major';