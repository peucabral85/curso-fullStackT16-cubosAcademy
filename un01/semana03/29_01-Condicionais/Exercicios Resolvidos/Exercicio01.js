const valorProduto = 100;
const numeroDeParcelas = 3;
let valorComDesconto;
let valorParcelado;

if (numeroDeParcelas === 1) {
    valorComDesconto = valorProduto - (valorProduto * 0.1);
    console.log(`Você pagará o valor de R$ ${valorComDesconto} ao pagar a vista.`)
} else {
    /*toLocaleString('pt-BR') para utilizar vírgula (,) como separador decimal 
      e a propriedade {maximumFractionDigits: 2} para delimitar 2 casas decimais.
      {style: 'currency'} para setar como um formato monetário 
      e {currency: 'BRL'} para setar a moeda brasileira*/
    valorParcelado = (valorProduto / numeroDeParcelas).toLocaleString('pt-BR', { maximumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    console.log(`Você pagará ${numeroDeParcelas} parcelas no valor de ${valorParcelado}.`);
}