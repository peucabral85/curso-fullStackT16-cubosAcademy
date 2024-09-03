const express = require('express');
const rotasUsuarios = require('./routes/usuarios');
const rotasCarros = require('./routes/carros');

const app = express();

app.use(express.json());
app.use(rotasUsuarios);
app.use(rotasCarros);

app.listen(3000);
