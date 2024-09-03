//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13_000;

//valor final da mercadoria (reais)
let valorFinal;


if (tipoDePagamento === "credito") {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.05)) / 100;
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.03)) / 100;
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.1)) / 100;
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`);
} else {
    console.log("O método de pagamento informado não é aceito.");
}

