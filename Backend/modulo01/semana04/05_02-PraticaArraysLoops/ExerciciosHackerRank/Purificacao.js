const stringCorrompida = "$Ailuropoda@ melanoleuca!";
let dadoPurificado = "";
for (let letras of stringCorrompida) {
    if (!(letras === "!" || letras === "@" || letras === "#" || letras === "$" || letras === "%" || letras === "&" || letras === "*" || letras === "(" || letras === ")" || letras === ".")) {
        dadoPurificado += letras;
    }
}
console.log(dadoPurificado);