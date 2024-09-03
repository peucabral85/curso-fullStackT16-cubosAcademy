const express = require('express');
const multer = require('multer');
const { uparArquivosBucket, listarArquivosBucket, uparMultiplosArquivosBucket, deletarArquivosBucket } = require('../controllers/uploads');


const rotas = express();

rotas.post('/upload', multer().single('arquivos'), uparArquivosBucket);
rotas.post('/upload-multiple', multer().array('arquivos'), uparMultiplosArquivosBucket);
rotas.get('/arquivos', listarArquivosBucket);
rotas.delete('/arquivos', deletarArquivosBucket);

module.exports = rotas;