const express = require('express');
const { get, getPorId } = require('./controladores/imoveis');

const rota = express();

rota.get('/imoveis', get);
rota.get('/imoveis/:id', getPorId);

module.exports = rota;