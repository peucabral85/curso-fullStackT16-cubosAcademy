const pool = require('../connection/conexao');

const cadastrarLivroAutor = async (req, res) => {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;

    try {
        const query = `insert into livros (nome, genero, editora, data_publicacao, autor_id)
                       values($1, $2, $3, $4, $5) 
                       returning id, nome, genero, editora, to_char(data_publicacao, 'YYYY-MM-DD') as data_publicacao`;
        const params = [nome, genero, editora, data_publicacao, id];

        const { rows } = await pool.query(query, params);

        return res.status(201).json(rows);
    } catch (error) {
        return res.status(500).json({ "mensagem": `Erro interno do Servidor. Mensagem de erro: ${error.message}` });
    }
}

const listarLivros = async (req, res) => {

    try {
        const query = ` select l.id, l.nome, l.genero, l.editora, 
        to_char(l.data_publicacao, 'YYYY-MM-DD') as data_publicacao,
        json_build_object(
            'id', a.id,
            'nome', a.nome,
            'idade', a.idade
        ) as autor
        from livros l
        join autores a on l.autor_id = a.id
        order by l.id 
        `;

        const { rows: livros } = await pool.query(query);

        return res.status(201).json(livros);
    } catch (error) {
        return res.status(500).json({ "mensagem": `Erro interno do Servidor. Mensagem de erro: ${error.message}` });
    }
}
module.exports = {
    cadastrarLivroAutor,
    listarLivros
}