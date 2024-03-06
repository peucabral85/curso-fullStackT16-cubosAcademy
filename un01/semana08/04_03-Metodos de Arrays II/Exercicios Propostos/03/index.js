const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const verificaLista = palavras.some((palavra) => {
    return palavra === 'cerveja' || palavra === 'vodka';
});

verificaLista ? console.log('Revise sua lista, joão. Possui bebida com venda proibida!') : console.log('Tudo certo, vamos as compras!');