class Lampada {
    private estado: boolean
    private potencia: number

    constructor(potencia: number) {
        this.potencia = potencia
        this.estado = false
    }

    ligar() {
        this.estado = true
    }

    desligar() {
        this.estado = false
    }

    medirPotencia(): number {
        return this.potencia
    }

    verificarEstado(): string {
        return this.estado ? 'Lâmpada ligada.' : 'Lâmpada desligada.'
    }
}

const lampada = new Lampada(20)
console.log(lampada.verificarEstado())
lampada.ligar()
console.log(lampada.verificarEstado())
lampada.desligar()
console.log(`A potência da lâmpada é de ${lampada.medirPotencia()}W.`)