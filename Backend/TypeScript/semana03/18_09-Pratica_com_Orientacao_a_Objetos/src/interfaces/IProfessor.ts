import { Aluno } from "../Aluno";

export interface IProfessor {
    lancarNota(aluno: Aluno, nota: number): void
}