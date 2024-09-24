import { Animal, Mamifero } from "./Mamifero";

export class Cachorro extends Mamifero {
    constructor(animal: Animal) {
        super(animal)
    }

    latir(): string {
        return 'Cachorro Latindo.'
    }
}