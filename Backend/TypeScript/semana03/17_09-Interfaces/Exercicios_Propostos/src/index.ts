import { Carrinho } from "./Carrinho";
import { VendaCredito } from "./VendaCredito";
import { VendaDebito } from "./VendaDebito";

const carrinho1 = new Carrinho()
carrinho1.adicionarProduto({
    id: 1,
    descricao: 'TV Samsung 49MU6100 4K',
    categoria: 'TVs 4k',
    valor: 280000,
    quantidade: 1
})
carrinho1.adicionarProduto({
    id: 2,
    descricao: 'Smartphone Samsung S23 5G 256GB',
    categoria: 'Smartphones',
    valor: 400000,
    quantidade: 1
})
carrinho1.adicionarProduto({
    id: 3,
    descricao: 'Notebook Asus X550L 15pol',
    categoria: 'Notebooks',
    valor: 250000,
    quantidade: 1
})
console.log(carrinho1.imprimirResumo())
console.log(carrinho1.alterarQuantidadeProduto(3, 2))
console.log(carrinho1.removerProduto(2))
console.log(carrinho1.imprimirResumo())

const credito = new VendaCredito(carrinho1)
credito.aplicarDesconto()
console.log(credito.finalizarVenda())

const debito = new VendaDebito(carrinho1)
debito.aplicarDesconto()
console.log(debito.finalizarVenda())