import { Animal, Mamifero } from "./Mamifero";

export class Baleia extends Mamifero {
    constructor(animal: Animal) {
        super(animal)
    }

    nadar(): string {
        return 'Baleia Nadando.'
    }

    andar(): string {
        return 'Baleias não podem andar.'
    }
}