const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const verificaIdProduto = (idProduto) => {
    return produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });
}

const calcularFrete = (ufFrete, valor) => {
    if (ufFrete === 'SP' || ufFrete === 'RJ') {
        return valor * 0.15;
    } else if (ufFrete === 'BA' || ufFrete === 'SE' || ufFrete === 'AL' || ufFrete === 'PE' || ufFrete === 'PB') {
        return valor * 0.10;
    } else {
        return valor * 0.12;
    }
}

const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos);
}

const obterProduto = async (req, res) => {
    const { idProduto } = req.params;

    const produtoEncontrado = verificaIdProduto(idProduto);

    if (!produtoEncontrado) {
        return res.status(404).json({ "mensagem": "O id informado não existe. Produto não encontrado." });
    }

    return res.status(200).json(produtoEncontrado);
}

const calcularFreteProdutos = async (req, res) => {
    const { idProduto, cep } = req.params;

    const produtoEncontrado = verificaIdProduto(idProduto);

    if (!produtoEncontrado) {
        return res.status(404).json({ "mensagem": "O id informado não existe. Produto não encontrado." });
    }

    try {
        const ufFrete = await getStateFromZipcode(cep);

        if (!ufFrete) {
            return res.status(404).json({ "mensagem": "O cep informado não existe." });
        }

        const calculoFrete = await calcularFrete(ufFrete, produtoEncontrado.valor);

        const freteProdutos = {
            "produto": produtoEncontrado,
            "estado": ufFrete,
            "valor": calculoFrete
        }
        return res.status(201).json(freteProdutos);
    } catch (error) {
        return res.status(500).json({ "mensagem": error.message });
    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    calcularFreteProdutos
}