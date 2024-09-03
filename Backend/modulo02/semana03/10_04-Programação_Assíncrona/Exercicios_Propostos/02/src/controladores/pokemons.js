const { listarPokemons, detalharPokemon } = require('utils-playground');

const listarTodosPokemons = async (req, res) => {
    const { pagina } = req.query;
    let listaDosPokemons;

    if (pagina) {
        listaDosPokemons = await listarPokemons(pagina);
    } else {
        listaDosPokemons = await listarPokemons();
    }

    return res.status(200).json(listaDosPokemons.results);
}

const detalharOsPokemons = async (req, res) => {
    const { pokemon } = req.params;

    detalhesPokemon = await detalharPokemon(pokemon);

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
}

module.exports = {
    listarTodosPokemons,
    detalharOsPokemons
}