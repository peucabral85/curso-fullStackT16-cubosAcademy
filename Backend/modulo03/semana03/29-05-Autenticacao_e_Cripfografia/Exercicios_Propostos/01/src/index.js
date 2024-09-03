const express = require('express');
const rotasUsuarios = require('./routes/usuarios');
const rotasPokemons = require('./routes/pokemons');

const app = express();

app.use(express.json());
app.use(rotasUsuarios);
app.use(rotasPokemons);

app.listen(3000);