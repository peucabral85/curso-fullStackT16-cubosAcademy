const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    const { aluno, valor, questoes } = prova;
    let qtdAcertos = 0;
    for (let questao of questoes) {
        if (questao.resposta === questao.correta) {
            qtdAcertos++;
        }
    }

    const notaProva = (valor / questoes.length) * qtdAcertos;

    if (qtdAcertos === 0) {
        console.log(`O(a) aluno(a) ${aluno} não acertou nenhuma questão e obteve nota 0.`)
    } else if (qtdAcertos === 1) {
        console.log(`O(a) aluno(a) ${aluno} acertou ${qtdAcertos} questão e obteve nota ${notaProva}.`)
    } else {
        console.log(`O(a) aluno(a) ${aluno} acertou ${qtdAcertos} questões e obteve nota ${notaProva}.`)
    }
}

corrigirProva(prova);