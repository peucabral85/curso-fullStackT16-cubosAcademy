import { Aluno } from "./Aluno";
import { Pessoa, Usuario } from "./Usuario";

export class Professor extends Usuario {
    constructor(pessoa: Pessoa) {
        super(pessoa)
    }

    lancarNota(aluno: Aluno, nota: number) {
        aluno.setNotas = nota
    }
}