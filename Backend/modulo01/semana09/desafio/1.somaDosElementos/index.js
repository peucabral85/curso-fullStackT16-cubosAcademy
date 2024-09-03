const lista = [1, 2, 3, 4];

const totalValorCofre = lista.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});

console.log(totalValorCofre);