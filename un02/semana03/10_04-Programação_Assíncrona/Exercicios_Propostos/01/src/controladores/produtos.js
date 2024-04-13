const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const verificaIdProduto = async (idProduto) => {
    return produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });
}

const calcularFrete = async (ufFrete, valor) => {
    if (ufFrete === 'SP' || ufFrete === 'RJ') {
        return valor * 0.15;
    } else if (ufFrete === 'BA' || ufFrete === 'SE' || ufFrete === 'AL' || ufFrete === 'PE' || ufFrete === 'PB') {
        return valor * 0.10;
    } else {
        return valor * 0.12;
    }
}

const listarProdutos = async (req, res) => {
    const listaDeProdutos = await produtos;
    return res.status(200).json(listaDeProdutos);
}

const obterProduto = async (req, res) => {
    const { idProduto } = req.params;

    const produtoEncontrado = await verificaIdProduto(idProduto);

    if (!produtoEncontrado) {
        return res.status(404).json({ "mensagem": "O id informado não existe. Produto não encontrado." });
    }

    return res.status(200).json(produtoEncontrado);
}

const calcularFreteProdutos = async (req, res) => {
    const { idProduto, cep } = req.params;

    const produtoEncontrado = await verificaIdProduto(idProduto);

    if (!produtoEncontrado) {
        return res.status(404).json({ "mensagem": "O id informado não existe. Produto não encontrado." });
    }

    const ufFrete = await getStateFromZipcode(cep);

    if (!ufFrete) {
        return res.status(404).json({ "mensagem": "O cep informado não existe." });
    }

    const calculoFrete = await calcularFrete(ufFrete, produtoEncontrado.valor);

    const freteProdutos = {
        "produto": {
            "id": produtoEncontrado.id,
            "nome": produtoEncontrado.nome,
            "valor": produtoEncontrado.valor
        },
        "estado": ufFrete,
        "valor": calculoFrete
    }
    return res.status(201).json(freteProdutos);
}

module.exports = {
    listarProdutos,
    obterProduto,
    calcularFreteProdutos
}