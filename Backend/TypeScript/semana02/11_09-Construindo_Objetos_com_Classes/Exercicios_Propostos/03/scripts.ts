type Produto = {
    descricao: string,
    valor: number,
    quantidade: number
}

class Fatura {
    private cliente: string
    private transacoes: Produto[]

    constructor(cliente: string) {
        this.cliente = cliente
        this.transacoes = []
    }

    registrarProduto(produto: Produto) {
        this.transacoes.push(produto)
    }

    private calcularTotalProduto(produto: Produto): number {
        return (produto.quantidade * produto.valor) / 100
    }

    private formatarValor(valor: number): string {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    private gerarDescricaoProduto(produto: Produto): string {
        const totalProduto = this.calcularTotalProduto(produto)
        return `${produto.quantidade} - ${produto.descricao} (${this.formatarValor(produto.valor / 100)}) = ${this.formatarValor(totalProduto)}`
    }

    fecharFatura(): string {
        let fatura = `Cliente: ${this.cliente}\n\n`
        let totalFatura = 0

        for (const transacao of this.transacoes) {
            const totalProduto = this.calcularTotalProduto(transacao)
            totalFatura += totalProduto
            fatura += this.gerarDescricaoProduto(transacao) + '\n'
        }

        fatura += `\nTotal: ${this.formatarValor(totalFatura)}`

        return fatura
    }

}

const fatura = new Fatura('Pedro')
fatura.registrarProduto({
    descricao: 'Camisa Azul',
    valor: 5990,
    quantidade: 2
})
fatura.registrarProduto({
    descricao: 'Camisa Amarela',
    valor: 7900,
    quantidade: 4
})
console.log(fatura.fecharFatura())