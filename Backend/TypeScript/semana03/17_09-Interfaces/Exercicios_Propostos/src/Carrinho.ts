import { Iproduto } from "./interfaces/IProduto";

export class Carrinho {
    private produtos: Iproduto[]

    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto: Iproduto): string {
        this.produtos.push(produto)
        return 'Produto adicionado com sucesso.'
    }

    removerProduto(id: number): string {
        const indexProduto = this.produtos.findIndex(produto => produto.id === id)
        if (indexProduto === -1) {
            return 'Produto não encontrado para exclusão.'
        }

        this.produtos.splice(indexProduto, 1)
        return 'Produto removido com sucesso.'
    }

    alterarQuantidadeProduto(id: number, quantidade: number): string {
        const produtoEncontrado = this.produtos.find(produto => produto.id === id)
        if (!produtoEncontrado) {
            return 'Produto não encontrado.'
        }

        produtoEncontrado.quantidade = quantidade
        return 'Quantidade do Produto atualizada com sucesso.'
    }

    imprimirResumo(): Iproduto[] {
        return this.produtos
    }
}