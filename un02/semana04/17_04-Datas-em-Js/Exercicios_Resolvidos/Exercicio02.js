const finalDaCopa = new Date(2002, 5, 30, 8);
const primeiroGolTimestamp = +finalDaCopa + 1000 * 60 * 82;
const primeiroGolDate = new Date(primeiroGolTimestamp);

const segundoGolTimestamp = +finalDaCopa + 1000 * 60 * 94;
const segundoGolDate = new Date(segundoGolTimestamp);

console.log(primeiroGolDate, segundoGolDate);

