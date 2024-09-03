const precos = [100, 500, 100, 200, 50];
let menorPreco = precos[0];
let somaPreco = 0;

//solução melhorada
for (valor of precos) {
    somaPreco += valor;
    if (valor < menorPreco) {
        menorPreco = valor;
    }
}

if (precos.length >= 5) {
    console.log(somaPreco - menorPreco);
} else {
    console.log(somaPreco);
}

//1ª solução encontrada
/*if (precos.length >= 5) {
    for (let valor of precos) {
        if (valor < menorPreco) {
            menorPreco = valor;
        }
        somaPreco += valor;
    }
    somaPreco -= menorPreco;
} else {
    for (let valor of precos) {
        somaPreco += valor;
    }
}
console.log(somaPreco);
*/