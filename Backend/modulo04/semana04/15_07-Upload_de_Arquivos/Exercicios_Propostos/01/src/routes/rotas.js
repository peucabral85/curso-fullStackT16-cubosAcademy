const express = require('express');
const verificaLogin = require('../middlewares/verificaLogin');
const multer = require('../middlewares/multer');
const usuarios = require('../controllers/usuarios');
const login = require('../controllers/login');
const produtos = require('../controllers/produtos');
const validarCorpoRequisicao = require('../middlewares/validarCorpoRequisicao');
const { schemaCadastrarProduto, schemaAtualizarProduto } = require('../schemas/schemaProdutos');

const rotas = express();

// cadastro de usuario
rotas.post('/usuarios', usuarios.cadastrarUsuario);

// login
rotas.post('/login', login.login);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

// obter e atualizar perfil do usuario logado
rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil);

// crud de produtos
rotas.get('/produtos', produtos.listarProdutos);
rotas.get('/produtos/:id', produtos.obterProduto);
rotas.post('/produtos',
    multer.single('imagem'),
    validarCorpoRequisicao(schemaCadastrarProduto),
    produtos.cadastrarProduto
);
rotas.put('/produtos/:id', validarCorpoRequisicao(schemaAtualizarProduto), produtos.atualizarProduto);
rotas.delete('/produtos/:id', produtos.excluirProduto);

//crud de imagens
rotas.patch('/produtos/:id/imagem', multer.single('imagem'), produtos.atualizarImagemProduto);
rotas.delete('/produtos/:id/imagem', produtos.deletarImagemProduto);

module.exports = rotas;