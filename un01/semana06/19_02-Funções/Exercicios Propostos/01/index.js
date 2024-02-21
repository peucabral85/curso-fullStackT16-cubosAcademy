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
    let notaProva = 0;
    for (let questao of questoes) {
        if (questao.resposta === questao.correta) {
            qtdAcertos++;
            notaProva += valor / questoes.length
        }
    }
    console.log(`O(a) aluno(a) ${aluno} acertou ${qtdAcertos} questões e obteve nota ${notaProva}.`)
}

corrigirProva(prova);

