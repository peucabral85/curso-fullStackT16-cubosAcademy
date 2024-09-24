import { Carrinho } from "./Carrinho";
import { IVenda } from "./interfaces/IVenda";
import { Venda } from "./Venda";

export class VendaCredito extends Venda implements IVenda {
    readonly desconto: number

    constructor(carrinho: Carrinho) {
        super(carrinho)
        this.desconto = 0.05
    }

    aplicarDesconto(): void {
        if (this.total > 10000) {
            this.total -= this.total * this.desconto
        }
    }

    finalizarVenda(): string {
        return `Pedido Finalizado. Total: ${(this.total / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    }

}