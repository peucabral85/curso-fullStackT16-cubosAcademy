import { escreverArquivo, lerArquivo } from '../01/index';
import { Usuario } from '../02/index';

export const excluirUsuario = (cpf: string): Usuario => {
    const bancoDeDados = lerArquivo() as Usuario[];
    const usuario = bancoDeDados.find(usuario => usuario.cpf === cpf);

    if (!usuario) {
        throw new Error('Usuário não encontrado.');
    }

    const exclusao = bancoDeDados.filter(usuario => usuario.cpf !== cpf);

    escreverArquivo(exclusao);

    return usuario;
}