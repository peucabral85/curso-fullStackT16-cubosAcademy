const transportador = require('../services/email');
const compiladorHtml = require('../utils/compiladorHtml');

const usuario = {
    nome: 'Pericles Cabral',
    email: 'peucabral@gmail.com',
    senha: 'abc123'
}

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (usuario.email !== email) {
        return res.status(400).json({ mensagem: "Email ou senha inválidos!" });
    }

    if (usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Email ou senha inválidos!" });
    }

    const html = await compiladorHtml('./src/templates/login.html', {
        nomeusuario: usuario.nome
    });

    transportador.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: `${usuario.nome} <${usuario.email}>`,
        subject: 'Tentativa de Login',
        html
    });

    return res.json({ mensagem: "Login efetuado com sucesso" });
}

module.exports = login;