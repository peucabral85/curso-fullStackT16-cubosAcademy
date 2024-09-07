const numeros: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filtroNumerosPares = (numeros: number[]): number[] => {
    const numerosFiltrados: number[] = numeros.filter(numero => numero % 2 === 0);
    return numerosFiltrados;
}

console.log(filtroNumerosPares(numeros));