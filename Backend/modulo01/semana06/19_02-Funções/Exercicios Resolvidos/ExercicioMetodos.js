const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor",
    apresentarPessoa: function () {
        const faixaEtaria = this.determinaFaixaEtaria(this.idade);

        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}.`);
    },
    determinaFaixaEtaria: function () {
        if (this.idade <= 21) {
            return 'jovem';
        } else if (this.idade <= 65) {
            return 'adulto(a)';
        } else {
            return 'idoso(a)'
        }
    }
}

pessoa1.apresentarPessoa();