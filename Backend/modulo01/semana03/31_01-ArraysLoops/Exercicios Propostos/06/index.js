const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somaNumPares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        somaNumPares += numeros[i];
    }
}
console.log(`A soma dos números pares presentes no array é igual a ${somaNumPares}.`);

