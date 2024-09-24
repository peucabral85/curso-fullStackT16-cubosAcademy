import { Animal, Mamifero } from "./Mamifero";

export class Gato extends Mamifero {
    constructor(animal: Animal) {
        super(animal)
    }

    miar(): string {
        return 'Gato Miando.'
    }
}