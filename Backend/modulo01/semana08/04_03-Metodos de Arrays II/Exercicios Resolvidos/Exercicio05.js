/* De acordo com o array de produtos abaixo, crie um novo array 
de produtos contendo nome, preco e desconto. O valor do desconto, 
será de 10% com base no valor de cada produto.
*/

const produtos = [
    { nome: "arroz", preco: 500 },
    { nome: "carne", preco: 3200 },
    { nome: "biscoito", preco: 450 },
    { nome: "banana", preco: 320 },
];

const produtosDesconto = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        desconto: produto.preco * 0.1
    }
});

console.log(produtosDesconto);