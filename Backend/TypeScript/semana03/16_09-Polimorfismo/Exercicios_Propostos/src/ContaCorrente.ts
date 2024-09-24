import { ContaBancaria } from "./ContaBancaria";
import { TipoContaBancaria } from "./types/TipoContaBancaria";

export class ContaCorrente extends ContaBancaria {
    private limite: number

    constructor(conta: TipoContaBancaria) {
        super(conta)
        this.limite = 100000
    }

    depositar(valor: number): string {
        this.saldo += valor
        return `Saldo: ${(this.saldo / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    }

    sacar(valor: number, senha: string): string {
        if (this.senha !== senha) {
            return 'Senha inválida.'
        }

        if (valor > this.saldo + this.limite) {
            return 'Saldo insuficiente para o saque.'
        }

        this.saldo -= valor
        return `Saldo: ${(this.saldo / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    }

    toString(): string {
        return `Conta Corrente: ${this.numero},\nAgência: ${this.agencia},\nCliente: ${this.cliente.toString()},\nSaldo: ${(this.saldo / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    }
}