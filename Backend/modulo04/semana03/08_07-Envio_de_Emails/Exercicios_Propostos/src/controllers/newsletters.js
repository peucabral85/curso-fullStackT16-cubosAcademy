const transportador = require('../services/email');
const compiladorHtml = require('../utils/compiladorHtml');
const knex = require('../connections/conexao');

const cadastrarUsuario = async (req, res) => {
    const { nome, email } = req.body;

    try {
        const emailVerificado = await knex('usuarios').where({ email }).first();

        if (emailVerificado) {
            return res.status(409).json({ mensagem: "Email já cadastrado em nossa Newsletter para outro usuário." });
        }

        await knex('usuarios').insert({ nome, email });

        return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso em nossa Newsletter." });

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro do servidor!" });
    }
}

const enviaNewsletter = async (req, res) => {
    const { texto } = req.body;

    try {
        const listaDeEmails = await knex('usuarios');

        for (const lista of listaDeEmails) {
            const html = await compiladorHtml('./src/templates/newsletter.html', {
                nomeusuario: lista.nome,
                evangelho: texto
            });

            transportador.sendMail({
                from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
                to: `${lista.nome} <${lista.email}>`,
                subject: `Newsletter do dia ${new Date().toLocaleDateString()}`,
                html
            });
        }

        return res.status(200).json({ mensagem: "Emails enviados com sucesso!" })

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro do servidor." });
    }

}

module.exports = {
    cadastrarUsuario,
    enviaNewsletter
}