const express = require('express');
const { cadastrarUsuario, enviaNewsletter } = require('../controllers/newsletters');
const verificaCampos = require('../middlewares/verificaCampos');

const rotas = express();

rotas.post('/usuarios', verificaCampos, cadastrarUsuario);
rotas.post('/newsletters', enviaNewsletter)

module.exports = rotas;