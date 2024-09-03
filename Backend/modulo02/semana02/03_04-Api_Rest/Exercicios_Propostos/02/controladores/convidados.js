let { convidados } = require('../dados/bancoDeDados');

const listarConvidados = (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.status(200).json(convidados);
    }

    const convidado = convidados.find((convidado) => {
        return convidado === nome;
    });

    if (!convidado) {
        return res.status(404).json({ mensagem: 'O convidado buscado não está presente na lista.' });
    }

    res.status(200).json({ mensagem: 'Convidado presente.' });
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    const convidado = convidados.find((convidado) => {
        return convidado === nome;
    });

    if (convidado) {
        return res.json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });
    }

    convidados.push(nome);
    return res.json({ mensagem: "Convidado adicionado." });
}

const removerConvidado = (req, res) => {
    const { nome } = req.params;

    const convidado = convidados.find((convidado) => {
        return convidado === nome;
    });

    if (!convidado) {
        return res.status(404).json({ mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." });
    }

    convidados = convidados.filter((convidado) => {
        return convidado !== nome;
    });

    return res.json({ mensagem: "Convidado removido." });
}

module.exports = {
    listarConvidados,
    adicionarConvidado,
    removerConvidado
}