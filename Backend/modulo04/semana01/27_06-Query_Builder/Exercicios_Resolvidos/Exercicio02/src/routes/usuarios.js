const express = require('express');
const verificaCampos = require('../middlewares/verificaCampos');
const { cadastrarUsuarios, listarUsuarios, atualizarUsuarios, excluirUsuarios, obterUsuarios } = require('../controllers/usuarios');

const rotas = express();

rotas.post('/usuarios', verificaCampos, cadastrarUsuarios);
rotas.get('/usuarios', listarUsuarios);
rotas.get('/usuarios/:id', obterUsuarios);
rotas.put('/usuarios/:id', atualizarUsuarios);
rotas.delete('/usuarios/:id', excluirUsuarios);

module.exports = rotas;