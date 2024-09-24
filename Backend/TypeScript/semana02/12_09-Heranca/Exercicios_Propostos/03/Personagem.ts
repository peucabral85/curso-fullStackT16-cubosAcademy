export class Personagem {
    public nome: string
    private velocidade: number

    constructor(nome: string) {
        this.nome = nome
        this.velocidade = 0
    }

    get getVelocidade(): number {
        return this.velocidade
    }

    andar(): void {
        this.velocidade++
    }

    parar(): void {
        this.velocidade = 0
    }
}

