const express = require('express');
const { cadastrarUsuario, obterPerfil, atualizarPerfil } = require('../controllers/usuarios');
const { validaCamposCadastro, validaCamposPerfil } = require('../middlewares/validacoesUsuarios');
const verificaLogin = require('../middlewares/verificaLogin');

const rotas = express();

rotas.post('/usuarios', validaCamposCadastro, cadastrarUsuario);

rotas.use(verificaLogin);

rotas.get('/perfil', obterPerfil);
rotas.put('/perfil', validaCamposPerfil, atualizarPerfil);

module.exports = rotas;