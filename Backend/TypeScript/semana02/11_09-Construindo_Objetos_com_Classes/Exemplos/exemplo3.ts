class Carro {
    ligado = false
    aceleracao = 0

    constructor(
        public cor: string,
        public modelo: string,
        public marca: string,
        public ano: number,
        public potencia: number
    ) { }

    ligar() {
        if (!this.ligado) {
            this.ligado = true
        }
    }

    acelerar(rpm: number) {
        this.aceleracao += rpm
    }

    frear() {
        this.aceleracao = 0
    }

    estadoDoCarro(): string {
        if (this.ligado) {
            return 'O carro está ligado'
        }

        return `O carro está desligado`;
    }
}

const fusca = new Carro('preto', 'Fusca', 'Volkswagen', 1980, 90)
// fusca.ligar()
// fusca.acelerar(1000)
// fusca.acelerar(1000)
// fusca.acelerar(1000)
// fusca.frear()



console.log(fusca, fusca.estadoDoCarro());
