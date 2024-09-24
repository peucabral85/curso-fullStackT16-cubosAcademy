class Pessoa {
    private nome: string
    private idade: number
    private velocidade = 0
    private sobrenome: string

    constructor(nome: string, idade: number, sobrenome: string) {
        this.nome = nome
        this.idade = idade
        this.sobrenome = sobrenome
    }

    private nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    public andar() {
        this.velocidade += 1
    }

    public get getIdade(): number {
        return this.idade
    }

    public set setIdade(idade: number) {
        this.idade = idade
    }

    public get getNome(): string {
        return this.nomeCompleto()
    }
}

const guido = new Pessoa('Guido', 32, 'Cerqueira')
guido.getIdade
guido.setIdade = 40

console.log(guido.getNome);
