const arrayNumeros: number[] = [0, 122, 4, 6, 7, 8, 44];
const arrayNumeros1: number[] = [0, 122, 4, 6, 14, 8, 44];

const verificaSeNumeroPar = (numeros: number[]): string => {
    const resultado: boolean = numeros.every(numero => numero % 2 === 0);
    return resultado ? 'Array válido.' : 'Array inválido';
}

console.log(verificaSeNumeroPar(arrayNumeros));
