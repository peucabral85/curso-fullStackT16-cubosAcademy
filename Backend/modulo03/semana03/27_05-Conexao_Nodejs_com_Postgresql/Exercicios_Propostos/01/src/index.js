const express = require('express');
const rotasAutores = require('./routes/autores');
const rotasLivros = require('./routes/livros');

const app = express();

app.use(express.json());
app.use(rotasAutores);
app.use(rotasLivros);

app.listen(3000);