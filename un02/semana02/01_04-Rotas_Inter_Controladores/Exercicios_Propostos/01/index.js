const express = require('express');

const app = express();

const somar = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) + Number(num2);
    res.send(String(resultado));
}

const subtrair = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) - Number(num2);
    res.send(String(resultado));
}

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) * Number(num2);
    res.send(String(resultado));
}

const dividir = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) / Number(num2);
    res.send(String(resultado));
}

app.get('/somar', somar);
app.get('/subtrair', subtrair);
app.get('/multiplicar', multiplicar);
app.get('/dividir', dividir);


app.listen(3000);