const nome = "jose messias junior";
let nomeFormatado = "";
const array = nome.split(" ");

for (const nomesArray of array) {
    let primeiraLetraMaiuscula = nomesArray.slice(0, 1).toUpperCase();
    let restanteNome = nomesArray.slice(1);
    nomeFormatado += primeiraLetraMaiuscula + restanteNome + " ";
}

console.log(nomeFormatado.trim());