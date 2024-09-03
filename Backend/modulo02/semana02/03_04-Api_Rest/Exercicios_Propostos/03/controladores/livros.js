let { livros, identificadorLivro } = require('../dados/bancoDeDados');

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
}

const obterLivro = (req, res) => {
    const { id } = req.params;

    if (Number(id) < 0 || Number(id) % 1 !== 0 || isNaN(id)) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." });
    }

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livroEncontrado) {
        return res.status(404).json({ "mensagem": "Não existe livro para o ID informado." });
    }

    return res.status(200).json(livroEncontrado);
}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ "mensagem": 'É obrigatório informar todos os dados.' });
    }

    if (titulo.trim() === '' || autor.trim() === '') {
        return res.status(400).json({ "mensagem": 'É obrigatório informar dados válidos.' });
    }

    if (Number(ano) < 0 || Number(ano) % 1 !== 0 || isNaN(ano)) {
        return res.status(400).json({ "mensagem": 'É obrigatório informar dados válidos.' });
    }

    const livro = {
        id: identificadorLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro);

    return res.status(201).json(livro);
}

const substituirLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (req.body.id) {
        return res.status(400).json({ "mensagem": "O ID não pode ser alterado." });
    }

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ "mensagem": 'É obrigatório informar todos os dados.' });
    }

    if (titulo.trim() === '' || autor.trim() === '') {
        return res.status(400).json({ "mensagem": 'É obrigatório informar dados válidos.' });
    }

    if (Number(ano) < 0 || Number(ano) % 1 !== 0 || isNaN(ano)) {
        return res.status(400).json({ "mensagem": 'É obrigatório informar dados válidos.' });
    }

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livroEncontrado) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." })
    }

    livroEncontrado.titulo = titulo;
    livroEncontrado.autor = autor;
    livroEncontrado.ano = ano;
    livroEncontrado.numPaginas = numPaginas;

    res.status(201).json({ "mensagem": "Livro substituído." });

}

const alterarLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (req.body.id) {
        return res.status(400).json({ "mensagem": "O ID não pode ser alterado." });
    }

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livroEncontrado) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." })
    }

    livroEncontrado.titulo = titulo ?? livroEncontrado.titulo;
    livroEncontrado.autor = autor ?? livroEncontrado.autor;
    livroEncontrado.ano = ano ?? livroEncontrado.ano;
    livroEncontrado.numPaginas = numPaginas ?? livroEncontrado.numPaginas;

    res.status(201).json({ "mensagem": "Livro alterado." });
}

const excluirLivro = (req, res) => {
    const { id } = req.params;

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livroEncontrado) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser removido para o ID informado." });
    }

    livros = livros.filter((livro) => {
        return livro.id !== Number(id);
    });

    res.status(201).json({ "mensagem": "Livro removido." });
}

module.exports = {
    listarLivros,
    obterLivro,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    excluirLivro
}