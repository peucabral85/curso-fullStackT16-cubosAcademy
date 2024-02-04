
//valor do produto comprado. (em centavos)
const valorDoProduto = 100_000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago (em reais)
const valorPago = 300;

const valorParcela = (valorDoProduto / 100) / quantidadeDoParcelamento;
const parcelasAPagar = (valorDoProduto / 100 - valorPago) / valorParcela;

console.log(`Restam ${parcelasAPagar} parcelas de R$ ${valorParcela.toFixed(2)}`);




