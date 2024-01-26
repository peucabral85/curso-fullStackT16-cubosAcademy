//Calculadora de IMC

const peso = 82.5;
const altura = 1.72;
let imc;

imc = peso / (altura ** 2);
console.log(`O seu IMC é de ${imc.toFixed(1)}`);