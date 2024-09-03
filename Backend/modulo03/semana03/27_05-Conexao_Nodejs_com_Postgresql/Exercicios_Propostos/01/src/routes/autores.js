const express = require('express');
const { cadastrarAutor, buscarAutor } = require('../controllers/autores');
const { cadastrarLivroAutor } = require('../controllers/livros');
const { validaCampoNome } = require('../middlewares/validacoesAutores');

const rotas = express();

rotas.post('/autor', validaCampoNome, cadastrarAutor);
rotas.get('/autor/:id', buscarAutor);
rotas.post('/autor/:id/livro', validaCampoNome, cadastrarLivroAutor);

module.exports = rotas;