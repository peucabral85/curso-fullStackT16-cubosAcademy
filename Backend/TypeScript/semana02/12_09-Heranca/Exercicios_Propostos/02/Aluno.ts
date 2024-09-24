import { Pessoa, Usuario } from "./Usuario";

export class Aluno extends Usuario {
    private notas: number[]

    constructor(pessoa: Pessoa) {
        super(pessoa)
        this.notas = []
    }

    set setNotas(nota: number) {
        this.notas.push(nota)
    }

    obterMedia(): number {
        if (this.notas.length === 0) {
            return 0;
        }

        const somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0)
        const media = somaNotas / this.notas.length

        return Math.round(media * 100) / 100
    }
}