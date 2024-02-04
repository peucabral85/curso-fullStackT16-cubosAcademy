const valorProduto = 100;
const numeroDeParcelas = 7;
let valorComDesconto;
let valorComJuros;
let valorParcelaComJuros;
let valorParcelaSemJuros;

if (numeroDeParcelas === 1) {
    valorComDesconto = valorProduto - (valorProduto * 0.1);
    console.log(`Você pagará o valor de R$ ${valorComDesconto} ao pagar a vista.`)
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    valorComJuros = (valorProduto * Math.pow((1 + 0.01), numeroDeParcelas));;
    valorParcelaComJuros = (valorComJuros / numeroDeParcelas).toLocaleString('pt-BR', { maximumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    console.log(`Você pagará ${numeroDeParcelas} parcelas, com juros, no valor de ${valorParcelaComJuros} totalizando o valor de ${valorComJuros.toLocaleString('pt-BR', { maximumFractionDigits: 2, style: 'currency', currency: 'BRL' })}.`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    valorParcelaSemJuros = (valorProduto / numeroDeParcelas).toLocaleString('pt-BR', { maximumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    console.log(`Você pagará ${numeroDeParcelas} parcelas, sem juros, no valor de ${valorParcelaSemJuros}.`);
} else {
    console.log("Quantidade de parcelas inválido!");
}