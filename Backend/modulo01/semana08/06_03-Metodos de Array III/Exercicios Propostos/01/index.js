const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

//Ordem crescente
numeros.sort((a, b) => {
    return a - b;
});

console.log(numeros);

//Ordem decrescente
numeros.sort((a, b) => {
    return b - a;
});

console.log(numeros);

//Ordem crescente unicode
numeros.sort();

console.log(numeros);

//Ordem alfabética
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera", "Maçã"];

frutas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(frutas);

//Ordem alfabética decrescente
frutas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(frutas);

//Ordem crescente de acordo com a quantidade de caracters.
//Inseri uma condição para que em caso de igualdade na quantidade de caracteres, verifique 
//por ordem alfabética crescente.

frutas.sort((a, b) => {
    let comparaPorTamanho = a.length - b.length;
    return comparaPorTamanho !== 0 ? comparaPorTamanho : a.localeCompare(b);
});

console.log(frutas);