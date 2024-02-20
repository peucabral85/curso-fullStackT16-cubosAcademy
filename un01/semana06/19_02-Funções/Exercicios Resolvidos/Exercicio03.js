function apresentarPessoa(pessoa) {
    const { nome, idade, profissao, altura } = pessoa;
    const faixaEtaria = verificaFaixaEtaria(idade);
    console.log(`Olá! Meu nome é ${nome}, sou um(a) ${faixaEtaria} de ${idade} anos, ${altura}m de altura e sou ${profissao}.`);
}

function verificaFaixaEtaria(idade) {
    if (idade <= 21) {
        return 'jovem';
    } else if (idade <= 65) {
        return 'adulto(a)';
    } else {
        return 'idoso(a)';
    }
}

const pessoa1 = {
    nome: 'João',
    idade: 12,
    profissao: 'estudante',
    altura: 1.4
}

apresentarPessoa(pessoa1);