function imprimirData(dia, mes, ano) {
    diaFormatado = String(dia).padStart(2, "0");
    mesFormatado = String(mes).padStart(2, "0");

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(21, 1, 2024);