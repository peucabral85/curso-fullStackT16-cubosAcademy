class BancoDeDados<T> {
    private dados: T[]

    constructor() {
        this.dados = []
    }

    adicionar(dado: T): void {
        this.dados.push(dado)
    }

    listar(): T[] {
        return this.dados
    }
}

interface Usuario {
    id: number
    nome: string
}

const usuario4 = new BancoDeDados<Usuario>()

usuario4.adicionar({
    id: 1,
    nome: 'Paulo'
})
usuario4.listar()