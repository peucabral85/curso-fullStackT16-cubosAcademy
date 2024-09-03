const disparos = [0, 10, 50, 70, 80, 30];
let qtdAcertos = 0;

for (let disparo of disparos) {
    if (disparo > 70) {
        qtdAcertos++;
    }
}
if (qtdAcertos >= 3 ? console.log(qtdAcertos) : console.log("ELIMINADO"));