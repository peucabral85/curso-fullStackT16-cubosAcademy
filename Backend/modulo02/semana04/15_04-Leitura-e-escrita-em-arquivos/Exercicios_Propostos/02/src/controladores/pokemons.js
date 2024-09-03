const { listarPokemons, detalharPokemon } = require('utils-playground');

const listarTodosPokemons = async (req, res) => {
    const { pagina } = req.query;

    try {
        const listaDosPokemons = await listarPokemons(pagina ?? 1);

        return res.status(200).json(listaDosPokemons.results);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
}

const detalharOsPokemons = async (req, res) => {
    const { pokemon } = req.params;

    try {
        const detalhesPokemon = await detalharPokemon(pokemon);

        const objetoPokemon = {
            "id": detalhesPokemon.id,
            "name": detalhesPokemon.name,
            "height": detalhesPokemon.height,
            "weight": detalhesPokemon.weight,
            "base_experience": detalhesPokemon.base_experience,
            "forms": detalhesPokemon.forms,
            "abilities": detalhesPokemon.abilities,
            "species": detalhesPokemon.species
        }

        res.status(200).json(objetoPokemon);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
}

module.exports = {
    listarTodosPokemons,
    detalharOsPokemons
}