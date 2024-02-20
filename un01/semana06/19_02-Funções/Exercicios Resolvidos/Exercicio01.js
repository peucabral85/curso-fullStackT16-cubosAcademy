const pessoa = {
    nome: 'João',
    idade: 12,
    profissao: 'estudante',
    altura: 1.4
}

function imprimeApresentacao(cidadao) {
    const { nome, idade, profissao, altura } = cidadao;
    console.log(`Olá! Meu nome é ${nome}, sou um jovem de ${idade} anos, ${altura}m de altura e sou ${profissao}.`);
}

imprimeApresentacao(pessoa);