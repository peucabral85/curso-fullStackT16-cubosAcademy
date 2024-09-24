// class Pessoa {
//     nome: string
//     idade: number

//     constructor(nome: string, idade: number) {}
// }

class Pessoa {
    constructor(
        public nome: string,
        public idade: number
    ) { }
}

const guido = new Pessoa('Guido', 32)
const joao = new Pessoa('João', 32)
const maria = new Pessoa('Maria', 32)
const ana = new Pessoa('Ana', 32)
guido.nome = 'Ana'

console.log(guido, joao, maria, ana);
