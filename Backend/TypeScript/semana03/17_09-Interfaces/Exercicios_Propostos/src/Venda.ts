import { Carrinho } from "./Carrinho"

export abstract class Venda {
    carrinho: Carrinho
    total: number

    constructor(carrinho: Carrinho) {
        this.carrinho = carrinho
        this.total = this.calcularTotal()
    }

    abstract finalizarVenda(): string

    private calcularTotal(): number {
        const somaTotal = this.carrinho.imprimirResumo().reduce((acc, carrinho) => acc + (carrinho.valor * carrinho.quantidade), 0)

        return somaTotal
    }
}