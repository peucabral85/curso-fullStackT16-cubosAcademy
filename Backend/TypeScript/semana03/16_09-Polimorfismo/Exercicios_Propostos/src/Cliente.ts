import { TipoCliente } from "./types/TipoCliente"
import { TipoEndereco } from "./types/TipoEndereco"

export class Cliente {
    public nome: string
    public email: string
    public cpf: string
    public dataCadastro: Date
    public enderecos: TipoEndereco[]

    constructor(clientes: TipoCliente) {
        this.nome = clientes.nome
        this.email = clientes.email
        this.cpf = clientes.cpf
        this.dataCadastro = new Date()
        this.enderecos = []
    }

    adicionarEndereco(endereco: TipoEndereco): void {
        this.enderecos.push(endereco)
    }

    toString(): string {
        const enderecosStr = this.enderecos.length > 0
            ? this.enderecos.map(endereco => `\nCep: ${endereco.cep},\nRua: ${endereco.rua},\nBairro: ${endereco.bairro},\nCidade: ${endereco.cidade}`).join(' | ')
            : '\nNenhum endereço cadastrado'

        return `\nNome: ${this.nome},\nCPF: ${this.cpf},\nEmail: ${this.email},\nData de Cadastro: ${this.dataCadastro.toLocaleDateString()},\nEndereços: ${enderecosStr}`
    }
}