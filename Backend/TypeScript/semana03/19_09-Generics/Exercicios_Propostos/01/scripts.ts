import { Pessoa } from "./Pessoa";

const pessoa = new Pessoa()

pessoa.cadastrar({
    id: 1,
    nome: 'Mateus',
    email: 'mateus@email.com'
})

pessoa.cadastrar({
    id: 2,
    nome: 'Mariana',
    email: 'mariana@email.com'
})

console.log(pessoa.listar())

pessoa.editar(2, {
    nome: 'Luisa',
    email: 'luisa@email.com'
})

console.log(pessoa.detalhar(2))

// pessoa.excluir(1)

// console.log(pessoa.listar())

console.log(pessoa.listarPorEmail('mateus@email.com'))
