const valores = [0, 5, 6, 10, 11];

function solucao(min, max, valores) {
    const verificaValores = valores.filter((valor) => {
        return valor >= min && valor <= max
    });
    console.log(verificaValores);
}

solucao(2, 10, valores);