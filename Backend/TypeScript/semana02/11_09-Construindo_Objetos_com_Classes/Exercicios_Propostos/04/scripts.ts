class Pessoa {
    constructor(
        private nome: string,
        private idade: number,
        private nomePai: string,
        private nomeMae: string
    ) { }

    verificaSeIrmao(pessoa: Pessoa): boolean {
        return this.nomePai === pessoa.nomePai || this.nomeMae === pessoa.nomeMae
    }

    verificaSeMaisVelha(pessoa: Pessoa): boolean {
        return this.idade > pessoa.idade
    }
}

const pessoa1 = new Pessoa('Marcelo', 34, 'Pedro', 'Luiza')
const pessoa2 = new Pessoa('Luis', 38, 'Pedro', 'Ana')
console.log(pessoa1.verificaSeIrmao(pessoa2))
console.log(pessoa1.verificaSeMaisVelha(pessoa2));
