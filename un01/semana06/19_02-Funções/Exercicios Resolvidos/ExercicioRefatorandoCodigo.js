const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico"
}

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"
}

function apresentarPessoa(pessoa) {
    const { nome, idade, profissao } = pessoa;
    if (idade <= 25) {
        console.log(`Sou ${nome}, sou um(a) jovem de ${idade} anos e sou ${profissao}.`);
    } else if (idade < 65) {
        console.log(`Sou ${nome}, sou um(a) adulto(a) de ${idade} anos e sou ${profissao}.`);
    } else {
        console.log(`Sou ${nome}, sou um(a) idoso(a) de ${idade} anos e sou ${profissao}.`);
    }
}

apresentarPessoa(pessoa1);
apresentarPessoa(pessoa2);
apresentarPessoa(pessoa3);