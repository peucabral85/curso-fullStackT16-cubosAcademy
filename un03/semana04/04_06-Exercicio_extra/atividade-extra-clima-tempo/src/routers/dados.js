const express = require('express');
const listarDados = require('../controllers/dados');
const verificaCep = require('../middlewares/verificaCep');

const rotas = express();

rotas.get('/dados', verificaCep, listarDados);

module.exports = rotas;