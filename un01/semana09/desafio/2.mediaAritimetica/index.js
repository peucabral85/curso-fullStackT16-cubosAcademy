const lista = [2, 3, 4]

const valorCofre = lista.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});

console.log(valorCofre / lista.length);