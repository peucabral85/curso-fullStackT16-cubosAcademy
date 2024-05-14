const input = "3\n0 0\n0 3\n4 0";
const novoArray = input.trim().split("\n").map((array) => array.split(" "));
let maiorDistancia = 0;

for (let i = 1; i < novoArray.length; i++) {
    for (let j = i + 1; j < novoArray.length; j++) {
        const distanciaPontos = Math.sqrt((novoArray[j][0] - novoArray[i][0]) ** 2 + (novoArray[j][1] - novoArray[i][1]) ** 2);
        if (distanciaPontos > maiorDistancia) {
            maiorDistancia = distanciaPontos;
        }
    }
}

console.log(maiorDistancia);
