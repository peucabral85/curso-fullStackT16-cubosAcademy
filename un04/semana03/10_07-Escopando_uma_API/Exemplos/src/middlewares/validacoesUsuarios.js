
const validaCamposCadastro = (req, res, next) => {
    const { username, senha } = req.body;

    if (!username) {
        return res.status(404).json({ mensagem: "O campo username é obrigatório." });
    }

    if (!senha) {
        return res.status(404).json({ mensagem: "O campo senha é obrigatório." });
    }

    if (senha.length < 8) {
        return res.status(404).json({ mensagem: "A senha deve conter, no mínimo, 8 caracteres." });
    }

    next();
}

const validaCamposPerfil = (req, res, next) => {
    const { nome, username, senha, email, telefone, genero, bio, site, imagem } = req.body;

    if (!nome && !username && !senha && !email && !telefone && !genero && !bio && !site && !imagem) {
        return res.status(400).json({ mensagem: "É obrigatório informar ao menos um campo para atualização." });
    }

    next();
}

module.exports = {
    validaCamposCadastro,
    validaCamposPerfil
}