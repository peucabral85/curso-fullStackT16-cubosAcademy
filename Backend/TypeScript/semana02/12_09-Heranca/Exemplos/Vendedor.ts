import { Funcionario } from "./Funcionario"

export class Vendedor extends Funcionario {
    private comissao: number

    constructor(nome: string, salario: number, comissao: number) {
        super(nome, salario)
        this.comissao = comissao
    }

    calcularSalario(): number {
        return this.salario + this.comissao
    }
}