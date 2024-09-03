// Metódo include
const frase = "Eu estou realizando o Curso de Desenvolvimento Full-Stack na Cubos Academy.";

console.log(frase.includes('Cubos'));

// Método indexOf
const email = 'diegosilva6325@gmail.com';

const temArroba = email.indexOf('@');
const temPontoAposArroba = email.indexOf('.', temArroba);

if (temPontoAposArroba > temArroba) {
    console.log('O email é válido.');
} else {
    console.log('O email não é válido.');
}

//Método lastIndexOf
const nome = 'Ricardo';
console.log(nome.lastIndexOf('r'));
console.log(nome.lastIndexOf('r', 2)); //inicia a busca a partir do indice 2 da direita para esquerda
console.log(nome.lastIndexOf('R', 2));

//Método slice
const cidade = 'Vitória da Conquista - BA';

const estado = cidade.slice(-2);
console.log(estado);

//Outra forma de utilzar o metódo slice nesse exemplo
//const penultimoItem = cidade.length - 2;
//const estado = cidade.slice(penultimoItem)
//console.log(estado);

//Método replace
const texto = 'Eu quero ser um programador Full-Stack.';

const newTexto = texto.replace('quero ser', 'serei');
console.log(texto);
console.log(newTexto);

//Método toUpperCase e toLowerCase
const text = 'Eu quero ser um programador Full-Stack.';

const gritando = text.toUpperCase(text);
const falandoBaixo = text.toLowerCase(gritando);
console.log(gritando);
console.log(falandoBaixo);

// Método trim
const emailComEspacos = "     diegooliveira96@gmail.com     "
const emailFormatado = emailComEspacos.trim();
console.log(`_${emailComEspacos}_`);
console.log(`_${emailFormatado}_`);

// Método padStart
const numero = "1";
const numeroComZeroEsquerda = numero.padStart(2, "0");

console.log(numeroComZeroEsquerda);

// Médoto split
const nomeCompleto = "Diego Oliveira Santos"
const array = nomeCompleto.split(" ");
const sobrenomeMeio = array[1];

console.log(sobrenomeMeio);