class Empresa {
    constructor(
        private nome: string,
        private fantasia: string,
        private cnpj: string,
        private telefone: string
    ) { }

    get getNome(): string {
        return this.nome
    }

    get getFantasia(): string {
        return this.fantasia
    }

    get getCnpj(): string {
        return this.cnpj
    }

    get getTelefone(): string {
        return this.telefone
    }

    set setFantasia(fantasia: string) {
        this.fantasia = fantasia
    }
}