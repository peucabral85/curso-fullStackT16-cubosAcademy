const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontrarCarro(array, posicao) {
    let resultado = array.slice(posicao, posicao + 3);
    console.log(resultado.join(" - "));
}

encontrarCarro(nomes, posicao);