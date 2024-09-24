import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

const pericles = new Cliente({
    nome: 'Pericles',
    email: 'peu@email.com',
    cpf: '08756476685'
})

const jaqueline = new Cliente({
    nome: 'Jaqueline',
    email: 'jaqueline@email.com',
    cpf: '06464766909'
})

pericles.adicionarEndereco({
    cep: '45000-000',
    rua: 'Avenida Jequié',
    bairro: 'Brasil',
    cidade: 'Salvador'
})

const conta1 = new ContaCorrente({
    saldo: 1000,
    numero: '7350-9',
    agencia: '875',
    senha: '1234',
    cliente: pericles
})

const conta2 = new ContaPoupanca({
    saldo: 1000,
    numero: '4550-7',
    agencia: '875',
    senha: '4321',
    cliente: jaqueline
})

console.log(conta1.toString())
console.log(conta1.depositar(10000))
console.log(conta1.sacar(10000, '1234'))
console.log(conta1.sacar(100000, '1234'))
console.log(conta1.sacar(10000, '1234'))
console.log('\n')
console.log(conta2.toString())
console.log(conta2.depositar(10000))
console.log(conta2.sacar(10000, '4321'))

