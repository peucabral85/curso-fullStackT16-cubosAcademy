const express = require('express');
const { cadastrarUsuario, loginUsuario, obterPerfil } = require('../controllers/usuarios');
const verificarUsuarioLogado = require('../middlewares/autenticacao');

const rotas = express();

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', loginUsuario);
rotas.get('/perfil', verificarUsuarioLogado, obterPerfil);

module.exports = rotas;