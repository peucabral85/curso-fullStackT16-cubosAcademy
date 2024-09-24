class Calculadora {

    private numero1: number
    private numero2: number

    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    somar(): number {
        return this.numero1 + this.numero2
    }

    subtrair(): number {
        return this.numero1 - this.numero2
    }

    multiplicar(): number {
        return this.numero1 * this.numero2
    }

    dividir(): number | string {
        if (this.numero2 === 0) {
            return 'Erro. Divisão por zero.'
        }
        return this.numero1 / this.numero2
    }
}

const calculo = new Calculadora(2, 0)
console.log(`Soma: ${calculo.somar()}`)
console.log(`Subtração: ${calculo.subtrair()}`)
console.log(`Multiplicação: ${calculo.multiplicar()}`)
console.log(`Divisão: ${calculo.dividir()}`)