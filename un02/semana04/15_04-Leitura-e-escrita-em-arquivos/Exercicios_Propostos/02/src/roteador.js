const express = require('express');
const { listarTodosPokemons, detalharOsPokemons } = require('./controladores/pokemons');

const rotas = express();

rotas.get('/pokemon', listarTodosPokemons);
rotas.get('/pokemon/:pokemon', detalharOsPokemons);


module.exports = rotas;