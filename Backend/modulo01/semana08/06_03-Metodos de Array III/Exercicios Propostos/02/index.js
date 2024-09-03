const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, valorAtual) => {
    let maior = acumulador;
    return valorAtual.length > maior.length ? maior = valorAtual : maior;
});

console.log(maiorString);