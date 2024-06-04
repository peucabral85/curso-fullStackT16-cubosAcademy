const express = require('express');
const { cadastrarPokemons, atualizarApelidoPokemon, listarPokemons, detalharPokemons, excluirPokemons } = require('../controllers/pokemons');
const verificarUsuarioLogado = require('../middlewares/autenticacao');
const { validaPokemonJaExiste, validaCamposPokemon } = require('../middlewares/validarPokemons');

const rotas = express();

rotas.use(verificarUsuarioLogado);

rotas.post('/pokemon', validaCamposPokemon, validaPokemonJaExiste, cadastrarPokemons);
rotas.patch('/pokemon/:id', validaPokemonJaExiste, atualizarApelidoPokemon);
rotas.get('/pokemon', listarPokemons);
rotas.get('/pokemon/:id', validaPokemonJaExiste, detalharPokemons);
rotas.delete('/pokemon/:id', validaPokemonJaExiste, excluirPokemons);

module.exports = rotas;