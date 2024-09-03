
const validaCampoNome = (req, res, next) => {
    const { nome } = req.body;

    if (typeof nome !== "string" || !isNaN(parseInt(nome)) || nome.trim() === '') {
        return res.status(400).json({ "mensagem": "O campo nome não foi informado ou está num formato inválido." });
    }

    next();
}

module.exports = {
    validaCampoNome
}