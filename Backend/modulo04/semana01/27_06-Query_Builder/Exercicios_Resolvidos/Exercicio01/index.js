const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

    //const resultado = await knex('farmacia').count();
    //const resultado = await knex('usuarios').min('idade');
    //const resultado = await knex('farmacia').select('categoria').sum('estoque').whereNotNull('categoria').groupBy('categoria');
    //const resultado = await knex('farmacia').count().whereNull('categoria');
    //const resultado = await knex('farmacia').select('categoria').count().whereNotNull('categoria').groupBy('categoria');
    const resultado = await knex('usuarios').select('idade').count().where('idade', '>=', 18).groupBy('idade').orderBy('idade');

    return res.json(resultado);
});

app.listen(3000);