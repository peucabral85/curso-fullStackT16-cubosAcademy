const express = require('express');
const { getCityFromZipcode } = require('utils-playground');

const app = express();

app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('45051140');
    const cidade2 = getCityFromZipcode('41256250');

    const promise = await Promise.all([cidade, cidade2]);

    // console.log(promise);
    const [municipio, municipio2] = promise;

    res.send(`A cidade encontrada foi: ${municipio} e ${municipio2}`);
});

app.listen(3000);