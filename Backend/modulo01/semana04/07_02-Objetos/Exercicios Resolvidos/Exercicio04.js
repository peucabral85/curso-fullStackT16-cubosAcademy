const produtosConsumidos = [
    {
        nome: "Bife a Milanesa",
        precoUn: 2500,
        quantidadeCompra: 1
    },
    {
        nome: "Cerveja",
        precoUn: 1100,
        quantidadeCompra: 2
    },
    {
        nome: "Pudim",
        precoUn: 1000,
        quantidadeCompra: 1
    }
];

const comandaCliente = {
    nome: "Pericles",
    idade: 39,
    produtosConsumidos
};

let valorTotal = 0;
for (let produtoConsumido of produtosConsumidos) {
    valorTotal += produtoConsumido.precoUn * produtoConsumido.quantidadeCompra;
}

console.log(`Olá ${comandaCliente.nome}, você consumiu o valor de R$ ${(valorTotal / 100).toFixed(2)}.`);