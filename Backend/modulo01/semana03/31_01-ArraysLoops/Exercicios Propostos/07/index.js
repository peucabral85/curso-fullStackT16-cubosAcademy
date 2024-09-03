const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesQueComecamComA = [];

for (let nome of nomes) {
    if (nome[0] === "A" || nome[0] === "a") {
        nomesQueComecamComA.push(nome);
    }
}
console.log(nomesQueComecamComA);
