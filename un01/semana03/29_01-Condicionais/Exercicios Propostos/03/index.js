const ladoA = 3;
const ladoB = 6;

if (ladoA < 0 || ladoA > 6 || ladoB < 0 || ladoB > 6) {
    console.log("Pedra inexistente.");
} else {
    console.log((ladoA === ladoB) ? "SIM, É UMA BUCHA." : "NÃO, NÃO É UMA BUCHA.");
}