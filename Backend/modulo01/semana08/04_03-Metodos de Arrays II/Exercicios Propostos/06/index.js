const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const verificaCidades = cidades.filter((cidade) => {
    return cidade.length <= 8;
});

verificaCidades.length ? console.log(verificaCidades.join(', ')) : console.log('Array vazio');