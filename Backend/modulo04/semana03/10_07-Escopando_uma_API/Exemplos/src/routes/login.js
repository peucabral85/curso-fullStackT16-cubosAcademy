const express = require('express');
const login = require('../controllers/login');

const rotas = express();

rotas.post('/login', login);

module.exports = rotas;