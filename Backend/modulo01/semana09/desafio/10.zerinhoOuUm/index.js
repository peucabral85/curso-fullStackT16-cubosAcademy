const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
];

const contaZeros = jogadores.filter((jogador) => jogador.jogada === 0);
const contaUm = jogadores.filter((jogador) => jogador.jogada === 1);

if (contaZeros.length === 1 && contaUm.length !== 1) {
    console.log(contaZeros[0].nome);
} else if (contaUm.length === 1 && contaZeros.length !== 1) {
    console.log(contaUm[0].nome);
} else {
    console.log("NINGUEM");
}