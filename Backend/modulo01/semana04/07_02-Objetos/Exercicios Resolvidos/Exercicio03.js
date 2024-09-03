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

console.log(comandaCliente.nome);
console.log(comandaCliente.idade);
comandaCliente.idade = 38;
console.log(comandaCliente.idade);
console.log(comandaCliente.produtosConsumidos[0].nome);
console.log(comandaCliente.produtosConsumidos[produtosConsumidos.length - 1].precoUn);