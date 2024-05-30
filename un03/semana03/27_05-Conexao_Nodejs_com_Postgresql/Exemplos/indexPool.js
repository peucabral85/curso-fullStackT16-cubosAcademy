//Testando conexão ao banco por Pool

const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '123456',
    database: 'aula_conexao_node_pg'
});


const app = express();

app.use(express.json());

app.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const querySelect = 'select * from empresas where id = $1';
        const paramsSelect = [id];

        const queryUpdate = 'update empresas set site = $1 where id = $2';
        const paramsUpdate = ['www.cakewalk.com', 1];

        const resultadoSelect = await pool.query(querySelect, paramsSelect);
        const resultadoUpdate = await pool.query(queryUpdate, paramsUpdate);

        const resposta = {
            resultadoSelect: resultadoSelect.rows,
            resultadoUpdate: `${resultadoUpdate.rowCount} linha alterada.`
        }
        return res.json(resposta);
    } catch (error) {
        console.log(error.message);
    }
});

app.get('/', async (req, res) => {
    const { porPagina, pagina } = req.query;

    try {
        const query = 'select * from pessoas order by id asc limit $1 offset $2';

        const { rowCount } = await pool.query('select * from pessoas');

        const offset = pagina === 1 ? 0 : (pagina - 1) * porPagina;
        const params = [porPagina, offset];

        const resultado = await pool.query(query, params);
        const result = {
            pagina,
            porPagina,
            total: rowCount,
            registros: resultado.rows
        }

        return res.json(result);

    } catch (error) {
        console.log(error.message);
    }
})

app.listen(3000);