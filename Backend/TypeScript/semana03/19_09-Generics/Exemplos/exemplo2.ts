// arrow function generics
// const useState = <T>() => { }

// function useState<T = string>() {
//     let state: T

//     function getState(): T {
//         return state
//     }

//     function setState(newState: T) {
//         state = newState
//     }

//     return { getState, setState }
// }

// function useState<T>() {
//     let state: T

//     function getState(): T {
//         return state
//     }

//     function setState(newState: T) {
//         state = newState
//     }

//     return { getState, setState }
// }

type Pessoa = {
    id: number,
    nome: string
}

type Pessoa2 = {
    id: number,
    nome: string,
    idade: number
}

function useState<T extends Pessoa>() {
    let state: T

    function getState(): T {
        return state
    }

    function setState(newState: T) {
        state = newState
    }

    return { getState, setState }
}

const usuario = useState<Pessoa2>()

// usuario.setState('1231')
// console.log(usuario.getState());

// usuario.setState('1231234')