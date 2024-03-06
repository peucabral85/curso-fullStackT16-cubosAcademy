const celular = 719884208256;
let celularStr = String(celular);

if (celularStr.length === 11) {
    const bloco1 = celularStr.slice(0, 2);
    const bloco2 = celularStr.slice(2, 3);
    const bloco3 = celularStr.slice(3, 7);
    const bloco4 = celularStr.slice(7);
    celularStr = `(${bloco1}) ${bloco2} ${bloco3}-${bloco4}`;
    console.log(celularStr);
} else if (celularStr.length === 10) {
    const bloco1 = celularStr.slice(0, 2);
    const bloco2 = '9';
    const bloco3 = celularStr.slice(2, 6);
    const bloco4 = celularStr.slice(6);
    celularStr = `(${bloco1}) ${bloco2} ${bloco3}-${bloco4}`;
    console.log(celularStr);
} else if (celularStr.length === 9) {
    const bloco1 = celularStr.slice(0, 1);
    const bloco2 = celularStr.slice(1, 5);
    const bloco3 = celularStr.slice(5);
    celularStr = `${bloco1} ${bloco2}-${bloco3}`;
    console.log(celularStr);
} else if (celularStr.length === 8) {
    const bloco1 = '9'
    const bloco2 = celularStr.slice(0, 4);
    const bloco3 = celularStr.slice(4);
    celularStr = `${bloco1} ${bloco2}-${bloco3}`;
    console.log(celularStr);
} else {
    console.log('Número inválido.');
}