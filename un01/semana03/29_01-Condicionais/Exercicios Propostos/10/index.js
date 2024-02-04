const caractere = 'a';

if (caractere === 'B' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
    console.log("Vogal Minúscula");
} else if (caractere === 'A' || caractere === 'E' || caractere === 'I' || caractere === 'O' || caractere === 'U') {
    console.log("Vogal Maiúscula");
} else if (!isNaN(caractere)) {
    console.log("Número");
} else {
    console.log("Qualquer letra que não seja uma vogal.");
}