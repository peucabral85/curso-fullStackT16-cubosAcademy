const express = require('express');
const produtos = require('./controladores/vendas');

const rotas = express();

rotas.get('/produtos', produtos.listarProdutos);
rotas.post('/produtos', produtos.registrarVenda);



module.exports = rotas;