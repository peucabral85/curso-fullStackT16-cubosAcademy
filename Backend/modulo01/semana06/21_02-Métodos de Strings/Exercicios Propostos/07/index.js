const email1 = "jose@cubos.academy";
const email2 = "jose@cubos.academy.br";
const email3 = "jose.messias@cubos.academy";
const email4 = "jose.messias@cubos.io";
const email5 = "jose@cubos";
const email6 = "jose.messias@cubos";
const email7 = "jose.messias@.";
const email8 = "jose.@cubos";
const email9 = ".@";
const email10 = "@.";
const email11 = "jose.messias@cubos.";
const email12 = ".messias@cubos.";
const email13 = ".messias@cubos";

function validaEmail(email) {
    if (email.startsWith('.') || email.endsWith('.')) {
        console.log("E-mail inválido.");
    } else if (!email.includes('@') || !email.includes('.')) {
        console.log("E-mail inválido.");
    } else {
        console.log("E-mail válido.");
    }
}

validaEmail(email1);
validaEmail(email2);
validaEmail(email3);
validaEmail(email4);
validaEmail(email5);
validaEmail(email6);
validaEmail(email7);
validaEmail(email8);
validaEmail(email9);
validaEmail(email10);
validaEmail(email11);
validaEmail(email12);
validaEmail(email13);