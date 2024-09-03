-- inner join
select e.id as "empresaId", f.id as "filialId", e.nome, f.pais, p.nome as funcionario 
from empresas e 
join filiais f on e.id = f.empresa_id
join pessoas p on e.id = p.empresa_id;

-- left join

select e.id as "empresaId", f.id as "filialId", e.nome, f.pais 
from empresas e 
left join filiais f on e.id = f.empresa_id;

-- right join

select e.id as "empresaId", f.id as "filialId", e.nome, f.pais 
from empresas e 
right join filiais f on e.id = f.empresa_id;

-- full join

select e.id as "empresaId", f.id as "filialId", e.nome, f.pais 
from empresas e 
full join filiais f on e.id = f.empresa_id;
