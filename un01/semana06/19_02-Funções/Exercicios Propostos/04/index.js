const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valorDeposito) {
        this.saldo += valorDeposito;
        this.historicos.push(
            {
                tipo: "Depósito",
                valor: valorDeposito
            }
        )
        return `Depósito de R$ ${valorDeposito / 100} realizado para o(a) cliente: ${this.nome}`;
    },
    sacar: function (valorSaque) {
        if (valorSaque > this.saldo) {
            return `Saldo insuficiente para o saque de ${this.nome}`;
        }
        this.saldo -= valorSaque;
        this.historicos.push(
            {
                tipo: "Saque",
                valor: valorSaque
            }
        );
        return `Saque de R$ ${valorSaque / 100} realizado para o(a) cliente: ${this.nome}`;
    },
    extrato: function () {
        let extrato = `Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}\nHistórico:\n`;
        for (let historico of this.historicos) {
            extrato += `${historico.tipo} de R$ ${historico.valor / 100}\n`
        }
        return extrato;
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());