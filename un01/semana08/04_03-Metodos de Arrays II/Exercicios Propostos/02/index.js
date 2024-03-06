const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificaPalavras = palavras.some((palavra) => {
    return palavra.length > 5;
});

verificaPalavras ? console.log('Existe palavra inválida.') : console.log('Array validado.');