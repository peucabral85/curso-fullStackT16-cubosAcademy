precos = [20, 15, 8, 2, 12];
menorDiferenca = 0;
valor = 0;

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        if (precos[i] > precos[j]) {
            valor = precos[i] - precos[j];
            if (valor < menorDiferenca || menorDiferenca === 0) {
                menorDiferenca = valor;
            }
        }
    }
}
console.log(menorDiferenca);
