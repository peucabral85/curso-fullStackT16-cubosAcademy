//Soma dos ângulos internos de um polígono

let s; //soma dos ângulos internos do polígono
let n = 6; // número de lados do polígono
let a; // valor de cada ângulo em graus

s = (n - 2) * 180;
a = s / n;

console.log(`O valor da soma dos ângulos internos do polígono é de ${s} e o valor de cada ângulo é de ${a}`);