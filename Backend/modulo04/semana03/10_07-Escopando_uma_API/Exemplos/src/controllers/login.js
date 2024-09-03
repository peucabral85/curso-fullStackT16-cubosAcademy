const knex = require('../connection/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, senha } = req.body;

    try {
        const usuario = await knex('usuarios').where({ username }).first();

        if (!usuario) {
            return res.status(401).json({ mensagem: "Usuário e/ou senha inválido(s)." });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ mensagem: "Usuário e/ou senha inválido(s)." });
        }

        const dadosTokenUsuario = {
            id: usuario.id,
            username: usuario.username
        }

        const token = jwt.sign(dadosTokenUsuario, process.env.PASS_JWT, { expiresIn: '8h' });

        const { senha: senhaUsuario, ...dadosUsuario } = usuario;

        return res.status(200).json({ usuario: dadosUsuario, token });

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = login;