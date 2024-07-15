const knex = require('../connection/conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { username, senha } = req.body;

    try {
        const usuarioValidado = await knex('usuarios').where({ username }).first();

        if (usuarioValidado) {
            return res.status(409).json({ mensagem: "O username informado já existe." });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        await knex('usuarios').insert({ username, senha: senhaCriptografada });

        return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro no servidor." });
    }
}

const obterPerfil = (req, res) => {
    return res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    const { id } = req.usuario;
    let { nome, username, senha, email, telefone, genero, bio, site, imagem } = req.body;

    try {

        if (username && username !== req.usuario.username) {
            const usernameExiste = await knex('usuarios').where({ username }).first();

            if (usernameExiste) {
                return res.status(409).json({ mensagem: "O username informado já existe." });
            }
        }

        if (email && email !== req.usuario.email) {
            const emailExiste = await knex('usuarios').where({ email }).first();

            if (emailExiste) {
                return res.status(409).json({ mensagem: "O email informado já existe." });
            }
        }

        if (senha) {
            if (senha.length < 8) {
                return res.status(400).json({ mensagem: "A senha deve conter, no mínimo, 8 caracteres" });
            }

            senha = await bcrypt.hash(senha, 10);
        }

        await knex('usuarios')
            .update({ nome, username, senha, email, telefone, genero, bio, site, imagem })
            .where({ id });

        return res.status(200).json({ mensagem: "O perfil do usuário foi atualizado com sucesso." });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}