const frutas = ['abacaxi', 'manga', 'melancia'];
const numeros = [1, 2, 3, 4, 5];

const testeFrutas = frutas.every((elementoAtual) => {
    return elementoAtual !== 'manga';
});

const testeNumeros = numeros.every((numero) => {
    return numero < 10;
});

console.log(testeFrutas);
console.log(testeNumeros);