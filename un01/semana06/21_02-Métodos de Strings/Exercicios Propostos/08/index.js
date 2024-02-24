const cpf = "011.022.033-44";
const cnpj = "05.899.877/0001-52";

function removePontuacao(texto) {
    let formatado = "";
    for (let caracter of texto) {
        if (caracter !== '-' && caracter !== '.' && caracter !== '/') {
            formatado += caracter;
        }
    }
    return formatado;
}

console.log(removePontuacao(cpf));
console.log(removePontuacao(cnpj));