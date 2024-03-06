let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function formatarNomeCompleto(nomeCompleto) {
    const array = nomeCompleto.split(" ");
    let nomeFormatado = "";
    for (let nomesArray of array) {
        let primeiraLetraMaiuscula = nomesArray.slice(0, 1).toUpperCase();
        let restanteNome = nomesArray.slice(1);
        nomeFormatado += primeiraLetraMaiuscula + restanteNome + " ";
    }
    return nomeFormatado.trim();
}

console.log(identificador.padStart(6, "0"));
console.log(formatarNomeCompleto(nome));
console.log(email.trim());