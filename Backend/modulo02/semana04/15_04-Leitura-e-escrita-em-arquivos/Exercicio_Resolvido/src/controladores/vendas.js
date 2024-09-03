const { parse } = require('path');
const produtos = require('../banco-de-dados/produtos');
const fs = require('fs/promises');

const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos);
}

const registrarVenda = async (req, res) => {
    const { produto_id, quantidade } = req.body;

    const produtoVerificado = produtos.find((produto) => {
        return produto.id === Number(produto_id);
    });

    if (!produtoVerificado) {
        return res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }

    try {
        const vendas = await fs.readFile('./src/banco-de-dados/vendas.json');
        const parseVendas = JSON.parse(vendas);

        parseVendas.vendas.push({
            produto: produtoVerificado,
            quantidade
        });

        await fs.writeFile('./src/banco-de-dados/vendas.json', JSON.stringify(parseVendas));

        return res.status(201).json('Venda registrada com sucesso.');

    } catch (error) {
        return res.status(500).json('Erro do servidor.');
    }
}

module.exports = {
    listarProdutos,
    registrarVenda
}