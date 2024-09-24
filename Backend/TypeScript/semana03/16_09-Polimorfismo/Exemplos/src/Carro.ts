export abstract class Carro {
    ano: number
    velocidade: number
    cor: string
    modelo: string

    constructor(ano: number) {
        this.ano = ano
        this.velocidade = 0
        this.cor = 'prata'
    }

    acelerar(): void {
        this.velocidade += 1
    }

    definirCaracteristica(cor: string): void {
        this.cor = cor
    }

    abstract ligarTurbo(): void
}