const soletrarPalavra = (palavra: string): string => {
    const palavraSoletrada = palavra.split('').join('-');

    return palavraSoletrada;
}

console.log(soletrarPalavra('programador'));