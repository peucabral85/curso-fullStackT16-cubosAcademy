const pool = require('../conexao');
const { criarCobranca, confirmarCobranca } = require('../stripe');

const venda = async (req, res) => {
    const { cliente_id, produto_id, quantidade, metodo_pagamento } = req.body;

    try {
        const cliente = await pool.query(
            'select * from clientes where id = $1', [cliente_id]
        );

        if (cliente.rowCount < 1) {
            return res.status(404).json({ mensagem: "Cliente não encontrado!" })
        }

        const produto = await pool.query(
            'select * from produtos where id = $1', [produto_id]
        );

        if (produto.rowCount < 1) {
            return res.status(404).json({ mensagem: "Produto não encontrado!" })
        }

        if (quantidade < 1) {
            return res.status(400).json({ mensagem: "Quantidade informada é inválida." })
        }

        const valorVenda = produto.rows[0].valor * quantidade;

        const cobranca = await criarCobranca(valorVenda, metodo_pagamento);
        const confirmar = await confirmarCobranca(cobranca.id);

        if (confirmar.status !== 'succeeded') {
            return res.status(400).json({ mensagem: 'Pagamento não autorizado.' });
        }

        const vendaRealizada = await pool.query(`
            insert into vendas (cliente_id, produto_id, quantidade, transacao_id)
            values($1, $2, $3, $4) returning *`, [cliente_id, produto_id, quantidade, cobranca.id]
        );

        return res.status(201).json(cobranca);

    } catch (error) {
        if (error.response) {
            res.status(400).json({ mensagem: error.response.data.error.message });
        }
        return res.status(500).json({ mensagem: `Erro interno do servidor: ${error}` });
    }
}

module.exports = {
    venda
}