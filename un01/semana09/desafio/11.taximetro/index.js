const min = 23;
const km = 9.5;
let valorKm = 0;
let valorMin = 0;

if (km > 10) {
    valorKm = 10 * 70 + ((km - 10) * 50);
} else {
    valorKm = km * 70;
}

if (min > 20) {
    valorMin = 20 * 50 + (min - 20) * 30;
} else {
    valorMin = min * 50;
}

console.log(Math.floor(valorKm + valorMin));