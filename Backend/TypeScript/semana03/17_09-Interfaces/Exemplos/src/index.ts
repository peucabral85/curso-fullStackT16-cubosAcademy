// interface ICarro {
//     marca: string
//     modelo: string
//     velocidade: number

//     acelerar(): void
// }

// class Carro implements ICarro {
//     marca: string
//     modelo: string
//     velocidade: number

//     acelerar(): void {
//         throw new Error("Method not implemented.")
//     }
// }


// interface ICarro {
//     ano: number
//     acelerar(): void
// }

// interface ICarro2 {
//     ligarTurbo(): void
// }

// abstract class Carro {
//     protected velocidade: number

//     abstract frear(): void
// }

// class Fusca extends Carro implements ICarro, ICarro2 {
//     ano: number

//     constructor(ano: number) {
//         super()
//         this.ano = ano
//         this.velocidade = 0
//     }

//     ligarTurbo(): void {
//         this.velocidade += 100
//     }

//     acelerar(): void {
//         this.velocidade += 1
//     }

//     frear(): void {
//         this.velocidade = 0
//     }
// }

// type TUsuario = {
//     nome: string
//     email: string
//     senha: string
// }

// interface IUsuario {
//     nome: string
//     email: string
//     senha: string
// }

// abstract class Usuario {
//     nome: string
//     email: string
//     protected senha: string

//     constructor(usuario: TUsuario) {
//         this.nome = usuario.nome
//         this.email = usuario.email
//         this.senha = usuario.senha
//     }

//     abstract login(senha: string): boolean
// }

// class Gerente extends Usuario {
//     constructor(usuario: IUsuario) {
//         super(usuario)
//     }

//     login(senha: string): boolean {
//         if (this.senha !== senha) {
//             return false
//         }
//         return true
//     }
// }

interface IAnimal {
    nome: string
}

interface IAnimal {
    peso: number
}

type TAnimal = {
    nome: string
}

type T2Animal = {
    peso: string
}

type T3Animal = TAnimal & T2Animal

let urso: T3Animal;

urso.nome = 'Urso'