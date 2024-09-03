const disjuntores = [false, false, true, false, false, true, false, false];
indice = 0;
for (let ligados of disjuntores) {
    if (ligados) {
        console.log(indice);
    }
    indice++;
}

