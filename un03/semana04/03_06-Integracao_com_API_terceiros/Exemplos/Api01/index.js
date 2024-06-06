const express = require('express');
const axios = require('axios');

const app = express();

const instanciaAxios = axios.create({
    baseURL: 'http://localhost:3001'
})

app.use(express.json());

app.get('/', async (req, res) => {
    //res.json(`Olá da API 1. Porta 3000`);

    // const resultadoAxios = await instanciaAxios.get('/carros');

    const novoCarro = {
        modelo: 'Celta',
        marca: 'Chevrolet'
    }

    const resultadoAxios = await instanciaAxios.post('/carros', novoCarro);

    res.json(resultadoAxios.data);
});

app.listen(3000);