const pool = require('../connection/conexao');

const validaCamposUsuarios = (req, res, next) => {
    const { nome, email, senha } = req.body;

    if (typeof nome !== "string" || !isNaN(parseInt(nome)) || nome.trim() === '') {
        return res.status(403).json({ mensagem: "Nome não informado ou está num formato inválido." });
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(403).json({ mensagem: "Email não informado ou está num formato inválido." })
    }

    if (!senha) {
        return res.status(403).json({ mensagem: "Senha não informada." });
    }

    next();
}

const validaEmailJaCadastrado = async (req, res, next) => {
    const { email } = req.body;

    const emailExiste = await pool.query('select * from usuarios where email ilike $1', [email]);

    if (emailExiste.rowCount >= 1) {
        return res.status(400).json({ mensagem: "Não foi possível realizar a operação. Email já cadastrado." });
    }

    next();
}

module.exports = {
    validaCamposUsuarios,
    validaEmailJaCadastrado
}