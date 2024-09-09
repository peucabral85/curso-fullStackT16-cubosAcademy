import { lerArquivo, escreverArquivo } from '../01/index';

type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

export type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null
}

export const cadastrarUsuario = (dados: Usuario): Usuario => {
    const bancoDeDados = lerArquivo() as Usuario[];

    bancoDeDados.push(dados);
    escreverArquivo(bancoDeDados);

    return dados;
}

export const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[];
}