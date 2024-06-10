const express = require('express');
const detalhaEmpresa = require('../controllers/empresas');

const rotas = express();

rotas.get('/empresas', detalhaEmpresa);

module.exports = rotas;