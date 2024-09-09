import { escreverArquivo, lerArquivo } from '../01/index';
import { Usuario } from '../02/index';

export const detalharUsuario = (cpf: string): Usuario => {
    const bancoDeDados = lerArquivo() as Usuario[];
    const usuario = bancoDeDados.find(usuario => usuario.cpf === cpf)

    if (!usuario) {
        throw new Error('Usuário não encontrado.');
    }

    return usuario;
}

export const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {
    const bancoDeDados = lerArquivo() as Usuario[];
    const usuario = bancoDeDados.find(usuario => usuario.cpf === cpf);

    if (!usuario) {
        throw new Error('Usuário não encontrado.');
    }

    Object.assign(usuario, dados);

    escreverArquivo(bancoDeDados);

    return dados;
}