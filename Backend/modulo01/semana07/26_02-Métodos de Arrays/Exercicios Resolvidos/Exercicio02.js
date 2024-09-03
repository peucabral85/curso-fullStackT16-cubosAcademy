//Exercicio com o metodo slice

const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89,
    69, 57, 33, 24, 11, 5, 3, 1, 0, 0];

function filtrar80(dados) {
    const indiceInicial = Math.round(dados.length * 0.1);
    const indiceFinal = Math.floor(dados.length * 0.9);
    const fatia = dados.slice(indiceInicial, indiceFinal);
    console.log(fatia);
}

filtrar80(dados);