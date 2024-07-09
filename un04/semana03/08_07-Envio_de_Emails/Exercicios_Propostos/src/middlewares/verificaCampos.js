const verificaCampos = (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "É obrigatório informar seu nome" });
    }

    if (!email) {
        return res.status(400).json({ mensagem: "É obrigatório informar o email." });
    }

    next();
}

module.exports = verificaCampos;