const numeros = [0, 122, 4, 6, 7, 8, 44];

const verificaPares = numeros.every((numero) => {
    return numero % 2 === 0;
});

verificaPares ? console.log('Array válido.') : console.log('Array inválido.');