import { Aluno } from "./Aluno"
import { Professor } from "./Professor"

const usuario1 = {
    nome: 'Pedro',
    email: 'pedro@email.com',
    senha: '1234'
}

const usuario2 = {
    nome: 'Maria',
    email: 'maria@email.com',
    senha: '12345'
}

const usuario3 = {
    nome: 'Joaquim',
    email: 'joaquim@email.com',
    senha: '12345'
}

const professor = new Professor(usuario1, 'Matemática')
const aluno1 = new Aluno(usuario1)
const aluno2 = new Aluno(usuario3)

professor.login('1234')
professor.lancarNota(aluno1, 8)
professor.lancarNota(aluno1, 6)
professor.lancarNota(aluno1, 7)


console.log(`Notas de ${usuario1.nome}: `, aluno1.notas)
console.log(`Média de ${usuario1.nome}: `, aluno1.obterMedia())