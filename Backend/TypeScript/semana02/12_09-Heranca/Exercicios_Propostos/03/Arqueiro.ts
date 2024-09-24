import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
    private quantidadeDeFlechas: number

    constructor(nome: string) {
        super(nome)
        this.quantidadeDeFlechas = 5
    }

    get getQuantidadeDeFlechas(): number {
        return this.quantidadeDeFlechas
    }

    lancarFlecha(): string {
        if (this.quantidadeDeFlechas > 0) {
            this.quantidadeDeFlechas--
            return 'Flecha lançada.'
        }

        return 'Falta de flecha.'
    }

    construirFlecha(): void {
        this.quantidadeDeFlechas++
    }
}