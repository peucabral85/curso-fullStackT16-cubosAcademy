-- Exemplos de consultas utilizando funções realizadas em aula

select count(*) as "quantidadeUsuarios" from usuarios where idade >= 18;

select nome || ' - ' || email as "nomeEmail" from usuarios;

select concat(nome, ' - ',email) as "nomeEmail" from usuarios;

select avg(idade) as "mediaIdade" from usuarios;

select round(avg(idade),2) as "mediaIdade" from usuarios;

select min(cadastro) as "menorData" from usuarios;

select max(idade) as "maiorIdade" from usuarios;

select sum(idade) as "somaIdades" from usuarios;

select idade::text from usuarios;

select cast(idade as text) from usuarios;

select cast(agendamento as date) from agendamentos;

select cast(agendamento as time) from agendamentos;

select cast(agendamento as timestamp) from agendamentos;

select now();

select * from agendamentos where cast(agendamento as date) > now();

select * from agendamentos where cast(agendamento as timestamp) > now();

select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) > now();

select concat(nome,' - ',coalesce(telefone,'Não possui telefone')) from usuarios;

select concat(nome,' - ',coalesce(telefone, email, 'Não possui')) from usuarios;

select idade, count(id) as qtd, sum(idade) as "somaIdades" from usuarios group by idade;