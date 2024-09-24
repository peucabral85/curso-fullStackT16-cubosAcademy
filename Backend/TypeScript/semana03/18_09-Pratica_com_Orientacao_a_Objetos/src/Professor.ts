import { Aluno } from "./Aluno";
import { IProfessor } from "./interfaces/IProfessor";
import { IUsuario } from "./interfaces/IUsuario";
import { Usuario } from "./Usuario";

export class Professor extends Usuario implements IProfessor {
    disciplina: string

    constructor(dadosUsuario: IUsuario, disciplina: string) {
        super(dadosUsuario)
        this.disciplina = disciplina
    }

    lancarNota(aluno: Aluno, nota: number): void {
        this.verificaLogin()
        aluno.notas.push(nota)
    }

    private verificaLogin(): void {
        if (!this.logado) {
            throw new Error('Professor não autenticado.')
        }
    }
}