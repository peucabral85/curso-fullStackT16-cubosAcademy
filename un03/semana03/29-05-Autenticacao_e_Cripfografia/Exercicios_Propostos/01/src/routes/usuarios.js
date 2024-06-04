const express = require('express');
const { cadastrarUsuarios, loginUsuario } = require('../controllers/usuarios');
const { validaCamposUsuarios, validaEmailJaCadastrado } = require('../middlewares/validarUsuarios');

const rotas = express();

rotas.post('/usuario', validaCamposUsuarios, validaEmailJaCadastrado, cadastrarUsuarios);
rotas.post('/login', loginUsuario);

module.exports = rotas;