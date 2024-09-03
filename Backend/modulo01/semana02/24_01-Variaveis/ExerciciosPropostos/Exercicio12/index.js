/* Taxa de Juros

Faça um programa que calcula a taxa de juros que foi operada sobre um financiamento a partir do montate total que foi pago, do capital inicial que foi obtido como empréstimo e do tempo decorrido do financiamento.
*/

let taxaJuros;
let montante = 90_000;
let capitalInicial = 60_000;
let numeroMeses = 24;

taxaJuros = (((montante / capitalInicial) ** (1 / numeroMeses) - 1) * 100).toFixed(3);

//toLocaleString('pt-BR') para que o delimitador decimal seja vírgula (,) e não ponto (.)
console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJuros.toLocaleString('pt-BR')}%, pois após ${numeroMeses} meses você teve que pagar ${montante} reais.`);