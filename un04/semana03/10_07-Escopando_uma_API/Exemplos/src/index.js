require('dotenv').config();
const express = require('express');
const rotasLogin = require('./routes/login');
const rotasUsuarios = require('./routes/usuarios');
const rotasPostagens = require('./routes/postagens');

const app = express();

app.use(express.json());

app.use(rotasLogin);
app.use(rotasUsuarios);
app.use(rotasPostagens);

app.listen(process.env.PORT_SERVER);