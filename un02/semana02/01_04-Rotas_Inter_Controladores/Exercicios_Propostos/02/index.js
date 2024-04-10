const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0;

const vezDeJogar = (req, res) => {
    indice > jogadores.length - 1 ? indice = 0 : indice;
    const usuarioAtual = jogadores[indice];
    res.send(`É a vez de ${usuarioAtual} jogar!`);
    indice++;
}

const removerJogador = (req, res) => {
    const { indice } = req.query;
    if (indice > jogadores.length - 1) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    } else {
        jogadores.splice(indice, 1);
        res.send(jogadores);
        indice = 0;
    }
}

const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query;
    if (!nome) {
        return res.send("É obrigatório informar o nome do jogador.");
    }
    let nomeFormatado = nome.charAt(0).toUpperCase() + nome.toLowerCase().slice(1);
    if (!indice) {
        jogadores.push(nomeFormatado);
        res.send(jogadores);
    } else if (indice > jogadores.length - 1) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`);
    } else {
        jogadores.splice(indice, 0, nomeFormatado);
        res.send(jogadores);
    }
}

app.get('/', vezDeJogar);
app.get('/remover', removerJogador);
app.get('/adicionar', adicionarJogador);


app.listen(8000);