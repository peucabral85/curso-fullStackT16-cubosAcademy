const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório");
    }

    if (!nome_loja) {
        return res.status(404).json("O campo nome_loja é obrigatório");
    }

    try {
        const emailEncontrado = await knex('usuarios')
            .where({ email })
            .first();

        if (emailEncontrado) {
            return res.status(400).json("O email já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios')
            .insert({
                nome,
                email,
                senha: senhaCriptografada,
                nome_loja
            })
            .returning(['id', 'nome', 'email', 'nome_loja']);

        return res.status(200).json(usuario[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;
    let senhaCriptografada = undefined;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        const emailEncontrado = await knex('usuarios')
            .where({ email })
            .first();

        if (emailEncontrado && emailEncontrado !== req.usuario.email) {
            return res.status(400).json("O email já existe");
        }

        if (senha) {
            senhaCriptografada = await bcrypt.hash(senha, 10);
        }

        await knex('usuarios')
            .update({
                nome,
                email,
                senha: senhaCriptografada,
                nome_loja
            })
            .where({ id: req.usuario.id });

        return res.status(200).json('Usuario foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}