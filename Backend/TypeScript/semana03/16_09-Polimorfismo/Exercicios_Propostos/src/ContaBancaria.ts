import { Cliente } from "./Cliente"
import { TipoContaBancaria } from "./types/TipoContaBancaria"

export abstract class ContaBancaria {
    protected saldo: number
    public numero: string
    public agencia: string
    protected senha: string
    public cliente: Cliente

    constructor(conta: TipoContaBancaria) {
        this.saldo = conta.saldo
        this.numero = conta.numero
        this.agencia = conta.agencia
        this.senha = conta.senha
        this.cliente = conta.cliente
    }

    consultarSaldo(senha: string): string {
        if (this.senha === senha) {
            return `Saldo: ${(this.saldo / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
        }

        return 'Senha Inválida.'
    }

    abstract depositar(valor: number): string

    abstract sacar(valor: number, senha: string): string
}