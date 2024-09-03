const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const soNumerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

soNumerosPares.length ? console.log(soNumerosPares) : console.log('Não há números pares no array.');