export type Animal = {
    nome: string
    peso: number
    altura: number
    comprimento: number
}

export class Mamifero {
    public nome: string
    public peso: number
    public altura: number
    public comprimento: number

    constructor(animal: Animal) {
        this.nome = animal.nome
        this.peso = animal.peso
        this.altura = animal.altura
        this.comprimento = animal.comprimento
    }

    andar(): string {
        return 'Animal Andando.'
    }

    comer(): string {
        return 'Animal Comendo.'
    }

    toString(): string {
        return `${this.constructor.name} { nome: '${this.nome}', peso: ${this.peso}, altura: ${this.altura}, comprimento: ${this.comprimento} }`;
    }
}