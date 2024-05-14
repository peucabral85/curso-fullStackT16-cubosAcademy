const input = "cubos\ncuggbyos";
const input2 = "cubos\newvelrabsocaeln";
const input3 = "cubos\ncuoenjboseos"

const senhas = input.trim().split("\n");
const senhaCorreta = senhas[0];
const senhaInformada = senhas[1];
let indice = 0;
let senhaVerificada = [];

for (letra of senhaCorreta) {
    if (senhaInformada.indexOf(letra, indice) !== -1) {
        senhaVerificada.push(letra);
        indice = senhaInformada.indexOf(letra, indice);
    }
}

senhaVerificada.length === senhaCorreta.length ? console.log("SIM") : console.log("NAO");