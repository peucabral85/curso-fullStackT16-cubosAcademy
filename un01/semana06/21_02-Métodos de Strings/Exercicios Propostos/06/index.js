const celular = 7188420825;
let celularStr = String(celular);

if (celularStr.length === 10) {
    const bloco1 = celularStr.slice(0, 2);
    const bloco2 = '9';
    const bloco3 = celularStr.slice(2, 6);
    const bloco4 = celularStr.slice(6, 11);
    celularStr = `(${bloco1}) ${bloco2} ${bloco3}-${bloco4}`;
} else if (celularStr.length === 8) {
    const bloco1 = '9'
    const bloco2 = celularStr.slice(0, 4);
    const bloco3 = celularStr.slice(4, 8);
    celularStr = `${bloco1} ${bloco2}-${bloco3}`;
}
console.log(celularStr);