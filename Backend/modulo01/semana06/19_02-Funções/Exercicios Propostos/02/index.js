const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            this.status();
        }
    },
    desligar: function () {
        if (this.ligado && this.velocidade === 0) {
            this.ligado = false;
            this.status();
        } else if (this.ligado && this.velocidade > 0) {
            console.log("O carro ainda está em movimento. É necessário desacelerar para desliga-lo.")
        }
        else {
            console.log("Este carro já está desligado.");
        }
    },
    acelerar: function () {
        this.start();
        this.velocidade += 10;
        this.status();

    },
    desacelerar: function () {
        this.velocidade -= 10;
        this.stop();
    },
    status: function () {
        console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${this.velocidade}`);
    },
    start: function () {
        if (!this.ligado) {
            this.ligar();
        }
    },
    stop: function () {
        if (this.velocidade === 0) {
            this.desligar();
        } else {
            this.status();
        }
    }
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
