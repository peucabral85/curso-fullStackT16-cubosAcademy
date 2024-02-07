const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let menorNota = notas[0];
let maiorNota = notas[0];
let somaNotas = 0;

for (let nota of notas) {
    somaNotas += nota;
    if (nota < menorNota) {
        menorNota = nota;
    }
    else if (nota > maiorNota) {
        maiorNota = nota;
    }
}
console.log((somaNotas - menorNota - maiorNota) / (notas.length - 2));