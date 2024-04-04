const carros = require('../bancodedados');

const filtrarCarros = (req, res) => {
    const { marca, cor } = req.query;
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca
        });
    }

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor
        });
    }

    res.send(resultado);
}

const encontrarUmCarro = (req, res) => {
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(req.params.id);
    });

    res.send(carroEncontrado);
}

module.exports = {
    filtrarCarros,
    encontrarUmCarro
}