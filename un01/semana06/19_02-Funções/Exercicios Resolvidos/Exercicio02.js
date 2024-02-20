function determinaFaixaEtaria(idade) {
    if (idade <= 21) {
        return 'jovem';
    } else if (idade <= 65) {
        return 'adulto(a)';
    } else {
        return 'idoso(a)';
    }
}

const faixaEtaria = determinaFaixaEtaria(75);
console.log(faixaEtaria);