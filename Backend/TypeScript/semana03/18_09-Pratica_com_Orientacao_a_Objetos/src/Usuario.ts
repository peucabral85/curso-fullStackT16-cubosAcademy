import { IUsuario } from "./interfaces/IUsuario"

export abstract class Usuario {
    nome: string
    email: string
    protected senha: string
    protected logado: boolean

    constructor(dadosUsuario: IUsuario) {
        this.nome = dadosUsuario.nome
        this.email = dadosUsuario.email
        this.senha = dadosUsuario.senha
        this.logado = false
    }

    login(senha: string): void {
        if (senha === this.senha) {
            this.logado = true
            return
        }

        this.logado = false
        return
    }
}