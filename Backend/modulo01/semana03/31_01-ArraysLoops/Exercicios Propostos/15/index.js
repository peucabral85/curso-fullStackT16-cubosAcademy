const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let numero of original) {
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}
console.log(pares);
console.log(impares);

/*
//Utilizando o While

let indice = 0;
while (indice < original.length) {
    if (original[indice] % 2 === 0) {
        pares.push(original[indice]);
    } else {
        impares.push(original[indice]);
    }
    indice++;
}
console.log(pares);
console.log(impares);

//Utilizando o For Tradicional

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
}
console.log(pares);
console.log(impares);
*/
