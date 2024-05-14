const precos = [150, 50];

const somaPrecos = precos.reduce((acumulador, valorAtual) => acumulador + valorAtual);

if (precos.length >= 3) {
    const menorPreco = precos.reduce((acumulador, valorAtual) => {
        return valorAtual < acumulador ? valorAtual : acumulador;
    }) * 0.5;

    console.log(somaPrecos - menorPreco);
} else {
    console.log(somaPrecos);
}