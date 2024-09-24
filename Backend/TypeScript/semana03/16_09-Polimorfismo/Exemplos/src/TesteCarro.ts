import { Carro } from "./Carro";

export class TesteCarro {
    carro: Carro

    constructor(carro: Carro) {
        this.carro = carro
    }

    testeTurbo() {
        this.carro.ligarTurbo()
    }
}