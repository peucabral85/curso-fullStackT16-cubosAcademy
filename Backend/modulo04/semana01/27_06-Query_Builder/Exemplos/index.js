const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

    //SELECT

    const agenda = await knex('agenda').debug();
    // const agenda = await knex.raw('select * from agenda');
    // const agenda = await knex('agenda').where('id', 5).debug();
    // const agenda = await knex('agenda').where('id', '!=', 5).debug();
    // const agenda = await knex('agenda').select('id', 'nome').debug();
    // const agenda = await knex('agenda').where({ id: 5 }).first().debug();
    // const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug();

    // select * from agenda where email is null
    // const agenda = await knex('agenda').whereNull('email').debug();
    // select * from agenda where email is not null
    // const agenda = await knex('agenda').whereNotNull('email').debug();
    // select * from agenda where id between 5 and 10
    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();
    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();
    // const agenda = await knex('agenda').distinct('email', 'nome').debug();

    // select email, count(*) from agenda group by email
    // const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
    // const agenda = await knex('agenda').limit(5).offset(2).debug();

    // const agenda = await knex('agenda').whereNull('email').count().debug();
    // const agenda = await knex('agenda').whereNull('email').debug();
    // const agenda = await knex('agenda').whereNull('email').sum('id').debug();
    // const agenda = await knex('agenda').whereNull('email').avg('id').debug();
    // const agenda = await knex('agenda').whereNull('email').min('id').debug();
    // const agenda = await knex('agenda').whereNull('email').max('id').debug();

    return res.status(200).json(agenda);
});

app.get('/anotacoes', async (req, res) => {

    const anotacoes = await knex('anotacoes as an')
        .join('agenda as ag', 'an.agenda_id', 'ag.id')
        .select('an.id', 'an.agenda_id', 'ag.nome', 'an.nota');

    return res.status(200).json(anotacoes);
});

app.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body;

    const novoContato = await knex('agenda').insert({ nome, email, telefone }).returning('*');

    return res.status(200).json(novoContato);
});

app.post('/:id/anotacoes', async (req, res) => {
    const { nota } = req.body;
    const { id } = req.params;

    const anotacao = await knex('anotacoes')
        .insert({
            nota,
            agenda_id: id
        })
        .returning('*');

    return res.status(200).json(anotacao);
});

app.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;

    const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where('id', id).returning('*');

    return res.json(agendaAtualizada);
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const contatoExcluido = await knex('agenda').delete().where('id', id).returning('id');

    return res.json(contatoExcluido);
});



app.listen(3000);