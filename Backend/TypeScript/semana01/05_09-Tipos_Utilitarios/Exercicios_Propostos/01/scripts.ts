type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type UsuarioSemRg = Omit<Usuario, 'rg'>
type UsuarioCamposObrigatorios = Required<UsuarioSemRg>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}