const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Valor total dos itens: R$ ${this.calcularTotalAPagar().toFixed(2)}`);
        console.log(`Desconto: R$ ${this.calcularDesconto().toFixed(2)}`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar() - this.calcularDesconto()}\n`);
    },
    addProduto: function (produtoNovo) {
        let temNoCarrinho = false;
        for (let produto of this.produtos) {
            if (produto.id === produtoNovo.id) {
                produto.qtd += produtoNovo.qtd;
                temNoCarrinho = true;
            }
        }
        if (!temNoCarrinho) {
            this.produtos.push(produtoNovo);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\n`);
        let ordem = 1;
        for (let produto of this.produtos) {
            console.log(`Item ${ordem} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`)
            ordem++;
        }
        console.log(`\nTotal de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Valor total dos itens: R$ ${this.calcularTotalAPagar().toFixed(2)}`);
        console.log(`Desconto: R$ ${this.calcularDesconto().toFixed(2)}`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() - this.calcularDesconto()).toFixed(2)}\n`);
    },
    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (let produto of this.produtos) {
            totalItens += produto.qtd;
        }
        return totalItens;
    },
    calcularTotalAPagar: function () {
        let totalPagar = 0;
        for (let produto of this.produtos) {
            totalPagar += produto.qtd * (produto.precoUnit / 100);
        }
        return totalPagar;
    },
    calcularDesconto: function () {
        let valorDescontoMaisBarato = this.produtos[0].precoUnit / 100;
        if (this.calcularTotalDeItens() > 4) {
            for (let produto of this.produtos) {
                if (produto.precoUnit < valorDescontoMaisBarato) {
                    valorDescontoMaisBarato = produto.precoUnit / 100;
                }
            }
        }
        const totalAPagar = this.calcularTotalAPagar();
        valorDescontoAcimaDe100 = totalAPagar > 100 ? totalAPagar * 0.1 : 0;

        return valorDescontoMaisBarato > valorDescontoAcimaDe100 ? valorDescontoMaisBarato : valorDescontoAcimaDe100;
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);


carrinho.imprimirResumo();
