const resultados = ["V", "E", "V", "E", "D", "E"];
let somaPontos = 0;

for (let resultado of resultados) {
    if (resultado === "V") {
        somaPontos += 3;
    } else if (resultado === "E") {
        somaPontos += 1;
    } else {
        somaPontos += 0;
    }
}
console.log(somaPontos);