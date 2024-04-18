const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const texto = 'tudo bem?';
    await fs.writeFile('./src/b.txt', texto);
    res.json('ok');
});

app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    try {
        const teste = await fs.readFile('./src/usuarios.json');

        const pessoas = JSON.parse(teste);

        pessoas.push({ nome, idade });

        const pessoasStringify = JSON.stringify(pessoas);

        await fs.writeFile('./src/usuarios.json', pessoasStringify);

        return res.json("Pessoa cadastrada com sucesso.");
    } catch (error) {
        return res.status(404).json(`Deu erro: ${error.message}`);
    } finally {
        console.log('Isso sempre será executado.');
    }
});

app.listen(3000);