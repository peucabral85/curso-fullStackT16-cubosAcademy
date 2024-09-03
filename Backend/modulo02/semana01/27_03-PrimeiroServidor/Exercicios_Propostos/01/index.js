const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0;

app.get('/', (req, res) => {
    indice > jogadores.length - 1 ? indice = 0 : indice;
    const usuarioAtual = jogadores[indice];
    res.send(`É a vez de ${usuarioAtual} jogar!`);
    indice++;
});

app.listen(3000);