-- Faça uma consulta no banco de dados "orquestra" que retornam todos os registros somente com os
-- campos "compositor", "composicao" e "tempo" onde o tempo seja entre 2 e 5 minutos e o 
-- compositor não seja "Mozart".

select compositor, composicao, tempo 
from musicas 
where tempo between 120 and 300 
and compositor <> 'Mozart';