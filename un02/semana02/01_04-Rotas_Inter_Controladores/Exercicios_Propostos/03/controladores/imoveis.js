const imoveis = require('../dados/imoveis');

const get = (req, res) => {
    res.send(imoveis);
}

const getPorId = (req, res) => {
    const { id } = req.params;
    const imovelEncontrado = imoveis.find((imovel) => {
        return imovel.id === Number(id);
    });

    res.send(imovelEncontrado);
}

module.exports = {
    get,
    getPorId
}