const imprimirEtiquetas = (
    informacoes: {
        produto: string,
        lote: number,
        ano: number,
        qtd: number
    }): string[] => {
    const etiquetas: string[] = [];

    for (let i = 1; i <= informacoes.qtd; i++) {
        etiquetas.push(`${informacoes.lote}-${informacoes.ano}-${i.toString().padStart(3, '0')}`);
    }

    return etiquetas;
}

console.log(imprimirEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));