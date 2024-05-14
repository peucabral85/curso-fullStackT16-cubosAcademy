function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3'];
    const verificaCarta = cartas.indexOf(carta);
    verificaCarta === cartas.length - 1 ? console.log(cartas[0]) : console.log(cartas[verificaCarta + 1]);
}

solucao('3');