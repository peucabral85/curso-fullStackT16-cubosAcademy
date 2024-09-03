const pool = require('../connection/conexao');

const validaCamposPokemon = (req, res, next) => {
    const { nome, habilidades } = req.body;

    if (typeof nome !== "string" || !isNaN(parseInt(nome)) || nome.trim() === '') {
        return res.status(403).json({ mensagem: "Nome não informado ou está num formato inválido." });
    }

    if (!habilidades) {
        return res.status(403).json({ mensagem: "É obrigatório informar as habilidades do Pokemon" });
    }

    next();
}

const validaPokemonJaExiste = async (req, res, next) => {
    const { nome, apelido } = req.body;
    const { id } = req.params;

    try {
        if (!nome && id) {
            const { rowCount } = await pool.query(
                'select * from pokemons where id = $1 and usuario_id = $2',
                [id, req.usuario.id]
            )

            if (rowCount === 0) {
                return res.status(404).json({ mensagem: 'Pokemon não encontrado!' })
            }
        } else if (nome && !id) {
            const pokemonExiste = await pool.query('select * from pokemons where (nome ilike $1 or apelido ilike $2) and usuario_id = $3', [nome, apelido, req.usuario.id]);

            if (pokemonExiste.rowCount >= 1) {
                return res.status(400).json({ mensagem: "Não foi possível realizar a operação. Pokemon já cadastrado." });
            }
        }

        next();
    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno do servidor: ${error}` });
    }
}

module.exports = {
    validaCamposPokemon,
    validaPokemonJaExiste
}