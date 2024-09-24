import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const pedro = new Aluno({
    nome: 'Pedro',
    email: 'pedro@email.com',
    telefone: '(77) 99876-5643',
    senha: '7654'
})

const professor = new Professor({
    nome: 'João',
    email: 'joao@email.com',
    telefone: '(71) 99098-5643',
    senha: '1234'
})

console.log(professor.autenticar('1234'))
professor.lancarNota(pedro, 8.7)
professor.lancarNota(pedro, 6)
professor.lancarNota(pedro, 9)
console.log(pedro.autenticar('7654'))
console.log(pedro.obterMedia())