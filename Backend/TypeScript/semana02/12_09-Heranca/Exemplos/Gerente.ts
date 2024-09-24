import { Funcionario } from "./Funcionario"

export class Gerente extends Funcionario {
    private senha: string

    constructor(nome: string, salario: number, senha: string) {
        super(nome, salario)
        this.senha = senha
    }

    validarSenha(senha: string): string {
        if (senha === this.senha) {
            return 'Gerente autorizado'
        }

        return 'Gerente não autorizado'
    }
}