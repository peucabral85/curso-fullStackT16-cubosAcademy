const validaCamposPostagens = (req, res, next) => {
    const { fotos } = req.body;

    if (!fotos || fotos.length < 1) {
        return res.status(400).json({ mensagem: "É necessário informar ao menos uma foto." });
    }

    next();
}

const validaCamposComentarios = (req, res, next) => {
    const { texto } = req.body;

    if (!texto) {
        return res.status(400).json({ mensagem: "É necessário informar um texto para o comentário." });
    }

    next();
}

module.exports = {
    validaCamposPostagens,
    validaCamposComentarios
} 