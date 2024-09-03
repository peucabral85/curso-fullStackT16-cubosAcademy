const express = require('express');
const { buscaEndereco } = require('./controladores/enderecos');

const rotas = express();

rotas.get('/enderecos/:cep', buscaEndereco);

module.exports = rotas;