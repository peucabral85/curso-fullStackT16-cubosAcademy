const pool = require('../connection/conexao');

const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body;

    try {
        const query = 'insert into autores (nome,idade) values($1, $2) returning *';
        const params = [nome, idade];

        const { rows } = await pool.query(query, params);

        return res.status(201).json(rows);
    } catch (error) {
        return res.status(500).json({ "mensagem": `Erro interno do Servidor. Mensagem de erro: ${error.message}` });
    }
}

const buscarAutor = async (req, res) => {
    const { id } = req.params;

    try {
        // const query = `select a.id as "idAutor", a.nome as "nomeAutor", 
        // a.idade, l.id as "idLivro", l.nome as "nomeLivro", 
        // l.genero, l.editora, l.data_publicacao 
        // from autores a join livros l on a.id = l.autor_id
        // where a.id = $1`;

        // utilizando funções json do postgresql
        const query = `select a.*,
        json_agg(
            json_build_object(
                'id', l.id,
                'nome', l.nome,
                'genero', l.genero,
                'editora', l.editora,
                'data_publicacao', to_char(l.data_publicacao, 'YYYY-MM-DD')
            )
        ) as livros
        from autores a 
        join livros l on a.id = l.autor_id
        where a.id = $1
        group by a.id;
        `;

        const { rows: autorEncontrado, rowCount } = await pool.query(query, [id]);

        if (rowCount === 0) {
            return res.status(403).json({ "mensagem": "Autor não encontrado!" });
        }

        // utilizando método Map para gerar objeto livro em json

        // const livros = autorEncontrado.map(livro => {
        //     return {
        //         id: livro.idLivro,
        //         nome: livro.nomeLivro,
        //         genero: livro.genero,
        //         editora: livro.editora,
        //         data_publicacao: livro.data_publicacao
        //     }
        // })

        // const autor = {
        //     id: autorEncontrado[0].idAutor,
        //     nome: autorEncontrado[0].nomeAutor,
        //     idade: autorEncontrado[0].idade,
        //     livros
        // }

        return res.status(201).json(autorEncontrado[0]);
    } catch (error) {
        return res.status(500).json({ "mensagem": `Erro interno do Servidor. Mensagem de erro: ${error.message}` });
    }

}

module.exports = {
    cadastrarAutor,
    buscarAutor
}