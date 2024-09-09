import { lerArquivo } from '../01/index';
import { Usuario } from '../02/index';

export const listarUsuariosComFiltro = (filtro?: string): Usuario[] => {
    const bancoDeDados = lerArquivo() as Usuario[];

    const usuarios = bancoDeDados.filter(usuario => {
        if (filtro) {
            return usuario.profissao?.toLowerCase() === filtro.toLowerCase();
        }

        return usuario;
    });

    return usuarios;
}