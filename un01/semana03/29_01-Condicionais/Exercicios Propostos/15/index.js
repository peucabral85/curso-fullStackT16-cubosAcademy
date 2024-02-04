const primeiroNome = "Pericles";
const sobrenome = "";
const apelido = "Peu";

if (!primeiroNome) {
    console.log("O preenchimento do primeiro nome é obrigatório!");
} else {
    if (apelido) {
        console.log(apelido);
    } else if (sobrenome) {
        console.log(`${primeiroNome} ${sobrenome}`);
    } else {
        console.log(primeiroNome);
    }
}
