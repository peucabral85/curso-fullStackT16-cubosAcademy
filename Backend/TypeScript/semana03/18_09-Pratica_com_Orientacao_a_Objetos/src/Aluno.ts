import { IUsuario } from "./interfaces/IUsuario";
import { Usuario } from "./Usuario";

export class Aluno extends Usuario {
    notas: number[]

    constructor(dadosUsuario: IUsuario) {
        super(dadosUsuario)
        this.notas = []
    }

    obterMedia(): number {
        const totalNotas = this.notas.reduce((acc, nota) => acc + nota, 0)
        const media = totalNotas / this.notas.length
        return media
    }
}