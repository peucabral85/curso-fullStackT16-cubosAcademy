import { Carro } from "./Carro";

export class Fusca extends Carro {
    constructor(ano: number) {
        super(ano)
    }

    ligarTurbo(): void {
        this.velocidade += 70
    }

    definirCaracteristica(cor: string): void {
        this.cor = cor
    }
}