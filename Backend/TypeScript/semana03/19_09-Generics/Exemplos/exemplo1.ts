function imprimir(param: string): string {
    return param
}

function imprimir2(param: number): number {
    return param
}

function imprimir3(param: any): any {
    return param
}

const ex1 = imprimir('Marcos')

// console.log(ex1.length);

const ex2 = imprimir2(123)

ex2.toFixed(2)

const ex3 = imprimir3('123')

ex3.length
// console.log(ex3.length)

function imprimir4<T>(param: T): T {
    return param
}

const ex4 = imprimir4<string>('123')

ex4.length