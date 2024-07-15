const express = require('express');
const verificaLogin = require('../middlewares/verificaLogin');
const { validaCamposPostagens, validaCamposComentarios } = require('../middlewares/validacoesPostagens');
const { cadastrarPostagem, curtirPostagem, comentarPostagem, mostrarFeed } = require('../controllers/postagens');

const rotas = express();

rotas.use(verificaLogin);

rotas.post('/postagens', validaCamposPostagens, cadastrarPostagem);
rotas.get('/postagens', mostrarFeed);
rotas.post('/postagens/:postagemId/curtidas', curtirPostagem);
rotas.post('/postagens/:postagemId/comentarios', validaCamposComentarios, comentarPostagem);

module.exports = rotas;