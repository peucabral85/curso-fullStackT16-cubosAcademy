const { knex } = require('../connections/conexao');
const { uparImagem, deletarImagens } = require('../services/storage');

const listarProdutos = async (req, res) => {
    const { usuario } = req;
    const { categoria } = req.query;

    try {
        const produtos = await knex('produtos')
            .where({ usuario_id: usuario.id })
            .where(query => {
                if (categoria) {
                    return query.where('categoria', 'ilike', `%${categoria}%`);
                }
            }).orderBy('id', 'asc');

        return res.status(200).json(produtos);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produto) {
            return res.status(404).json('Produto não encontrado');
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarProduto = async (req, res) => {
    const { usuario } = req;
    const { nome, estoque, preco, categoria, descricao } = req.body;

    const transacao = await knex.transaction();

    try {
        let produto = await transacao('produtos').insert({
            usuario_id: usuario.id,
            nome,
            estoque,
            preco,
            categoria,
            descricao
        }).returning('*');

        if (req.file) {
            const { originalname, mimetype, buffer } = req.file;

            const id = produto[0].id;

            const imagem = await uparImagem(
                `produtos/${id}/${originalname}`,
                buffer,
                mimetype
            );

            produto = await transacao('produtos').update({
                imagem: imagem.path
            }).where({ id }).returning('*');

            produto[0].urlImagem = imagem.url;
        }

        await transacao.commit();
        return res.status(201).json(produto[0]);

    } catch (error) {
        await transacao.rollback();
        return res.status(400).json(error.message);
    }
}

const atualizarProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { nome, estoque, preco, categoria, descricao } = req.body;

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        const produto = await knex('produtos')
            .where({ id })
            .update({
                nome,
                estoque,
                preco,
                categoria,
                descricao
            });

        return res.status(200).json('Produto foi atualizado com sucesso.');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).del();

        return res.status(200).json('Produto excluido com sucesso');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarImagemProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { originalname, mimetype, buffer } = req.file;

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado.');
        }

        if (produtoEncontrado.imagem !== null) {
            await deletarImagens(produtoEncontrado.imagem);
        }

        const uploadImagem = await uparImagem(
            `produtos/${produtoEncontrado.id}/${originalname}`,
            buffer,
            mimetype
        );

        await knex('produtos')
            .where({ id })
            .update({
                imagem: uploadImagem.path
            });

        return res.status(200).json('Imagem atualizada com sucesso.');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const deletarImagemProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado.');
        }

        await deletarImagens(produtoEncontrado.imagem);

        await knex('produtos')
            .where({ id })
            .update({
                imagem: null
            });

        return res.status(200).json('Imagem excluída com sucesso.');

    } catch (error) {

    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto,
    atualizarImagemProduto,
    deletarImagemProduto
}