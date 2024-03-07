const numeros = [250, 1, 4, 9, -1, -13, 13, 2, 50, 42, 11];

//Ordenação crescente
numeros.sort((a, b) => {
    return a - b;
});

console.log(numeros); //-13, -1,  1,  2,  4, 9, 11, 13, 42, 50, 250

//Ordenação decrescente
numeros.sort((a, b) => {
    return b - a;
});

console.log(numeros); //250, 50, 42, 13, 11, 9,  4,  2,  1, -1, -13