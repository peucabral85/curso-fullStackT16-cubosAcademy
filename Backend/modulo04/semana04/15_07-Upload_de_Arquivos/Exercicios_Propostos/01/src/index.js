require('dotenv').config();
const express = require('express');
const rotas = require('./routes/rotas');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(process.env.SERVER_PORT);