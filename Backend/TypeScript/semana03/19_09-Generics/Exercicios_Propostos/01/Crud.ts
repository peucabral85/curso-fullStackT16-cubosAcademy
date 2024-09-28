import { TCrud } from './Types/TCrud'

export abstract class Crud<T extends TCrud> {
    protected dados: T[]

    constructor() {
        this.dados = []
    }

    listar(): T[] {
        return this.dados
    }

    detalhar(id: number): T {
        const idEncontrado = this.dados.find(dado => dado.id === id)
        if (!idEncontrado) {
            throw new Error(`Id ${id} não encontrado.`);
        }

        return idEncontrado

    }

    cadastrar(objeto: T): void {
        this.dados.push(objeto)
    }

    editar(id: number, objeto: Omit<T, 'id'>): void {
        const idEncontrado = this.dados.find(dado => dado.id === id)
        const index = this.dados.findIndex(dado => dado.id === id)
        if (!idEncontrado || index === -1) {
            throw new Error(`Id ${id} não encontrado.`);
        }

        const novoObjeto = Object.assign(idEncontrado, objeto)

        this.dados.splice(index, 1, novoObjeto)

    }

    excluir(id: number): void {
        const index = this.dados.findIndex(dado => dado.id === id)
        if (index === -1) {
            throw new Error(`Id ${id} não encontrado.`);
        }

        this.dados.splice(index, 1)
    }
}