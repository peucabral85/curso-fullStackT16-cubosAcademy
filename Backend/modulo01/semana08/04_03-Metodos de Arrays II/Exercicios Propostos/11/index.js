const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const iniciaComLetraA = nomes.filter((nome) => {
    return nome.charAt(0).toLowerCase() === 'a';
});

iniciaComLetraA.length ? console.log(iniciaComLetraA) : console.log('Não há nomes iniciando com a letra A no array.');

