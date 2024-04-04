const express = require('express');
const { filtrarCarros, encontrarUmCarro } = require('./controladores/carros');

const app = express();

app.get('/carros', filtrarCarros);

app.get('/carros/:id', encontrarUmCarro);

app.listen(3000);