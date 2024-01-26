/*
Desconto do tênis

Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo.
O tênis custa R$ 129,99 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto, a única coisa que ele precisa saber é quanto por cento de desconto você necessita.
Crie um programa para calcular a porcentagem necessária de desconto para você conseguir comprar o tênis, utilizando a regra de três.
*/

let valorTotal = 129.99;
let meuDinheiro = 80;
let valorDoDesconto;
let percentualDoDesconto;

valorDoDesconto = valorTotal - meuDinheiro;
percentualDoDesconto = valorDoDesconto * 100 / valorTotal;

console.log(`O percentual de desconto foi de ${percentualDoDesconto.toFixed(1)}`);