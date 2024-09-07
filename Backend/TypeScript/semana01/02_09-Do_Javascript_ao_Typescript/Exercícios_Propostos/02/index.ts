const livros: string[] =
    [
        "Guerra e Paz",
        "A Montanha Mágica",
        "Cem Anos de Solidão",
        "Dom Quixote",
        "A Divina Comédia",
    ];

const localizarLivro = (livros: string[], nomeLivro: string): string => {
    const indexLivro: number = livros.indexOf(nomeLivro);
    if (indexLivro !== -1) {
        return `O livro está na posição ${indexLivro + 1}.`;
    }

    return `Livro não encontrado.`;
}

console.log(localizarLivro(livros, 'Dom Quixote'));