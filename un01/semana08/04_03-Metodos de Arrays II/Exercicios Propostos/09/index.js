const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const soNumerosPositivos = numeros.filter((numero) => {
    return numero > 0;
});

soNumerosPositivos.length ? console.log(soNumerosPositivos) : console.log("Não há números positivos no array.");

