const express = require('express');
const { validarSenha } = require('./intermediarios');
const alunos = require('./controladores/alunos');

const rotas = express();

rotas.use(validarSenha);

rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', alunos.obterAluno);
rotas.post('/alunos', alunos.cadastrarAluno);
rotas.put('/alunos/:id', alunos.substituirAluno);
rotas.patch('/alunos/:id', alunos.alterarAluno);
rotas.delete('/alunos/:id', alunos.excluirALuno);



module.exports = rotas;

