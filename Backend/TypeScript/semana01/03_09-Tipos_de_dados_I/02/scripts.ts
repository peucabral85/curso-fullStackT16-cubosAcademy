const encontrarUsuario = (
    usuarios: {
        nome: string,
        idade: number,
        status: boolean
    }[],
    nomeUsuario: string
): {
    nome: string,
    idade: number,
    status: boolean
}[] => {
    const nomeEncontrado = usuarios.filter(usuario => usuario.nome.toLowerCase().includes(nomeUsuario.toLowerCase()));
    return nomeEncontrado;
}

const listaUsuarios = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

console.log(encontrarUsuario(listaUsuarios, 'jo'));