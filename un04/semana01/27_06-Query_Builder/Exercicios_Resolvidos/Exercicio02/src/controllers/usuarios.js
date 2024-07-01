const knex = require('../connection/conexao');

const cadastrarUsuarios = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        const usuarioCadastrado = await knex('usuarios').insert({ nome, email, senha }).returning(['id', 'nome', 'email']);

        if (usuarioCadastrado.length === 0) {
            return res.status(400).json({ mensagem: "Não foi possível realizar o cadastro." });
        }

        return res.status(201).json(usuarioCadastrado[0]);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await knex('usuarios').select('id', 'nome', 'email');

        return res.status(200).json(usuarios);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const obterUsuarios = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await knex('usuarios').select('id', 'nome', 'email').where('id', id).first();

        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário não encontrado!" });
        }

        return res.status(200).json(usuario);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const atualizarUsuarios = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const { id } = req.params;

        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json({ mensagem: "Usuário não encontrado!" });
        }

        await knex('usuarios').update({ nome, email, senha }).where('id', id);

        return res.status(200).json({ mensagem: "Usuário alterado com sucesso!" });

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const excluirUsuarios = async (req, res) => {
    try {
        const { id } = req.params;

        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json({ mensagem: "Usuário não encontrado!" });
        }

        await knex('usuarios').del().where('id', id);

        return res.status(200).json({ mensagem: "Usuário excluído com sucesso!" });

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    cadastrarUsuarios,
    listarUsuarios,
    obterUsuarios,
    atualizarUsuarios,
    excluirUsuarios
}