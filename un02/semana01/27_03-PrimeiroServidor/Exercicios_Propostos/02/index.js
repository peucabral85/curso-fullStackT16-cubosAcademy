const express = require('express');

const app = express();

let min = 0; //minutos
let seg = 0; //segundos
let cronometro;

function atualizarSeg() {
    if (seg === 59) {
        seg = 0;
        atualizarMin();
        return;
    }
    seg += 1;
}

function atualizarMin() {
    return min += 1;
}

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${String(min).padStart(2, '0')} minuto(s) e ${String(seg).padStart(2, '0')} segundo(s)`);
});

app.get('/iniciar', (req, res) => {
    res.send('Cronômetro iniciado!');
    if (seg === 0 && min === 0) {
        cronometro = setInterval(atualizarSeg, 1000);
    }
});

app.get('/pausar', (req, res) => {
    res.send('Cronômetro pausado!');
    clearInterval(cronometro);
});

app.get('/continuar', (req, res) => {
    res.send('Cronômetro continuando!');
    cronometro = setInterval(atualizarSeg, 1000);
});

app.get('/zerar', (req, res) => {
    res.send(`Cronômetro zerado!`);
    seg = 0;
    min = 0;
});


app.listen(8000);