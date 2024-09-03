const express = require('express');
const { listarLivros } = require('../controllers/livros');

const rotas = express();

rotas.get('/livro', listarLivros);

module.exports = rotas;