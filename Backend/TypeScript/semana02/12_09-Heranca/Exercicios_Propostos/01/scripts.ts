import { Baleia } from "./Baleia";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";

const cachorro = new Cachorro({
    nome: 'Fla',
    peso: 6,
    altura: 15,
    comprimento: 32
})
const gato = new Gato({
    nome: 'Anitta',
    peso: 5,
    altura: 17,
    comprimento: 18
})
const baleia = new Baleia({
    nome: 'Willy',
    peso: 1000,
    altura: 10000,
    comprimento: 10000
})

console.log(cachorro);
console.log(cachorro.latir());
console.log(cachorro.andar());
console.log(cachorro.comer());
console.log(`\n${gato}`);
console.log(gato.miar());
console.log(gato.comer());
console.log(gato.andar());
console.log(`\n${baleia}`);
console.log(baleia.nadar());
console.log(baleia.comer());
console.log(baleia.andar());
