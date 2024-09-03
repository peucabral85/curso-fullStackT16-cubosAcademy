//Calcular juros compostos

let montante;
let capital = 1000;
let taxaFixaJuros = 0.125;
let periodoTempo = 5; //Em meses

montante = capital * ((1 + taxaFixaJuros) ** periodoTempo);

console.log(`O valor do montante é de ${montante.toFixed()}`);