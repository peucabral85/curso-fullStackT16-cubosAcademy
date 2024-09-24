import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    private quantidadeDeMagias: number

    constructor(nome: string) {
        super(nome)
        this.quantidadeDeMagias = 5
    }

    get getQuantidadeDeMagias(): number {
        return this.quantidadeDeMagias
    }

    usarMagia(): string {
        if (this.quantidadeDeMagias > 0) {
            this.quantidadeDeMagias--
            return 'Magia utilizada.'
        }

        return 'Magia indisponível.'
    }

    criarMagia(): void {
        this.quantidadeDeMagias++
    }
}