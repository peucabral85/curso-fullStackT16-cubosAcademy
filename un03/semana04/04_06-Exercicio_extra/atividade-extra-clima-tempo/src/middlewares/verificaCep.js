const pool = require('../connections/conexao');

const verificaCep = async (req, res, next) => {
    const { cep } = req.query;

    try {

        if (cep.length !== 8) {
            return res.status(400).json({ mensagem: "O CEP informado é inválido. Não possui 8 caracteres." });
        }

        const cepEncontrado = await pool.query('select * from ceps where cep = $1', [cep]);

        if (cepEncontrado.rowCount < 1) {
            return res.status(404).json({ mensagem: "O CEP informado não foi encontrado na base de dados." });
        }
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }

    next();
}

module.exports = verificaCep;