const express = require('express');
const rotas = require('./routers/dados');

const app = express();

app.use(express.json());

app.use(rotas);

app.listen(3000, () => console.log("Server is running"));