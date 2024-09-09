import { cadastrarUsuario, listarUsuarios } from './02/index';
import { atualizarUsuario, detalharUsuario } from './03/index';
import { excluirUsuario } from './04/index';
import { listarUsuariosComFiltro } from './05/index';

// cadastrarUsuario({
//      nome: 'Lucas dos Anjos',
//      email: 'lucas@email.com',
//      cpf: '017.654.544-19',
//      profissao: 'Advogado',
//      endereco: {
//          cep: '48799-000',
//          rua: 'Rua A',
//          bairro: 'Centro',
//          cidade: 'Poções'
//      }
// });

//console.log(listarUsuarios());

// atualizarUsuario('017.654.544-19', {
//     nome: 'Lucas dos Anjos',
//     email: 'lucas@email.com',
//     cpf: '017.654.544-19',
//     profissao: 'Advogado',
//     endereco: {
//         cep: '48799-000',
//         rua: 'Rua A',
//         complemento: 'Condominio Piatã, Bl Sol, AP203',
//         bairro: 'Centro',
//         cidade: 'Poções'
//     }
// })

// console.log(detalharUsuario('017.654.544-19'));

//excluirUsuario('017.654.544-19');

console.log(listarUsuariosComFiltro('PROFESSOR'));





