/* Calculo do perímetro e área de um círculo

Faça um programa que, a partir do raio de um círculo, calcula o comprimento (C) e a área (A) deste círculo.
*/

let raioCirculo = 1;
let comprimentoCirculo;
let areaCirculo;

comprimentoCirculo = 2 * Math.PI * raioCirculo;
areaCirculo = Math.PI * (raioCirculo ** 2);

console.log(`Para o círculo com raio ${raioCirculo} o comprimento é de ${comprimentoCirculo.toFixed(1)} e a sua área é de ${areaCirculo.toFixed(2)}`);