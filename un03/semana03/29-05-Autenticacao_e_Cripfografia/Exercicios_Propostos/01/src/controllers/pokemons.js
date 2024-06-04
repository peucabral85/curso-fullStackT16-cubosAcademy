const pool = require('../connection/conexao');

const cadastrarPokemons = async (req, res) => {
    const { id } = req.usuario;
    const { nome, habilidades, imagem, apelido } = req.body;

    try {
        await pool.query(`
            insert into pokemons (usuario_id,nome,habilidades,imagem,apelido) values($1,$2,$3,$4,$5)
        `, [id, nome, habilidades, imagem, apelido]);

        return res.status(201).json({ mensagem: 'Pokemon cadastrado com sucesso.' });

    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno do servidor: ${error}` });
    }
}

const atualizarApelidoPokemon = async (req, res) => {
    const { apelido } = req.body;
    const { id } = req.params;

    try {
        await pool.query(
            'update pokemons set apelido = $1 where id = $2',
            [apelido, id]
        );

        return res.status(201).json({ mensagem: "Atualização realizada com sucesso!" });

    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno do servidor: ${error}` });
    }
}

const listarPokemons = async (req, res) => {
    try {
        const { rows: pokemons } = await pool.query(
            'select id, nome, habilidades, apelido, imagem from pokemons where usuario_id = $1',
            [req.usuario.id]
        );

        const pokemonsOrdenados = pokemons.map(pokemon => ({
            id: pokemon.id,
            usuario: req.usuario.nome,
            nome: pokemon.nome,
            apelido: pokemon.apelido,
            habilidades: pokemon.habilidades.split(/,\s*/),
            imagem: pokemon.imagem
        }));

        return res.json(pokemonsOrdenados);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }

    //Utilizando função row_to_json para gerar o objeto json
    //e a regexp_split_to_array para gerar um array quebrando por vírgula

    /*try{   
        const {listaPokemons} = await pool.query(
           `select row_to_json(pokemon) as pokemons 
            from (
               select p.id, 
               u.nome as usuario,
               p.nome, 
               p.apelido,
               regexp_split_to_array(p.habilidades,',[[:space:]]*') as habilidades,
               p.imagem 
            from pokemons p inner join usuarios u on p.usuario_id = u.id
            ) pokemon;`
        )
   
        const listaFormatada = listaPokemons.rows.map(row => row.pokemons);
   
        return res.json(listaFormatada);
    }catch(error){
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
   */
}

const detalharPokemons = async (req, res) => {
    const { id } = req.params;

    try {
        const { rows: pokemons } = await pool.query(
            'select id, nome, habilidades, apelido, imagem from pokemons where id = $1 and usuario_id = $2',
            [id, req.usuario.id]
        );

        const pokemonsOrdenados = pokemons.map(pokemon => ({
            id: pokemon.id,
            usuario: req.usuario.nome,
            nome: pokemon.nome,
            apelido: pokemon.apelido,
            habilidades: pokemon.habilidades.split(/,\s*/),
            imagem: pokemon.imagem
        }));

        return res.json(pokemonsOrdenados);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const excluirPokemons = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query(
            'delete from pokemons where id = $1'
            , [id]);

        return res.json({ mensagem: "Pokemon deletado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }

}

module.exports = {
    cadastrarPokemons,
    atualizarApelidoPokemon,
    listarPokemons,
    detalharPokemons,
    excluirPokemons
}