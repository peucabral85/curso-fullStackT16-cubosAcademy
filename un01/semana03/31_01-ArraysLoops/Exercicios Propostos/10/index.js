const numeros = [8, 11, 4, 1];
let diferenca = 0;
let maiorDiferenca = 0;


for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        diferenca = Math.abs(numeros[i] - numeros[j]);
        if (diferenca > maiorDiferenca) {
            maiorDiferenca = diferenca;
        }
    }
}
console.log(maiorDiferenca);

/*Outra forma de resolução
let maior = 0;
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
console.log(maior - menor);
*/