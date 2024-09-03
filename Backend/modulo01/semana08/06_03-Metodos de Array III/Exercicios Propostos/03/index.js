const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorValor = numeros.reduce((acumulador, valorAtual) => {
    let maior = acumulador;
    return valorAtual > maior ? maior = valorAtual : maior;
});

console.log(maiorValor);