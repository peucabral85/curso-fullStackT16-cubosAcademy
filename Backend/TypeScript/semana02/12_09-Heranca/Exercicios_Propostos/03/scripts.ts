import { Arqueiro } from "./Arqueiro";
import { Mago } from "./Mago";

const gandalf = new Mago('Gandalf')
const legolas = new Arqueiro('Legolas')

console.log(gandalf)
gandalf.andar()
gandalf.andar()
gandalf.andar()
console.log(`Velocidade: ${gandalf.getVelocidade}`)
console.log(gandalf.usarMagia())
console.log(gandalf.usarMagia())
console.log(gandalf.usarMagia())
console.log(gandalf.usarMagia())
console.log(gandalf.usarMagia())
console.log(`${gandalf.usarMagia()}\n`)
console.log(legolas)
legolas.andar()
console.log(`Velocidade: ${legolas.getVelocidade}`)
legolas.construirFlecha()
console.log(`Qtd. Flechas: ${legolas.getQuantidadeDeFlechas}`)
console.log(legolas.lancarFlecha())
console.log(legolas.lancarFlecha())
console.log(legolas.lancarFlecha())
console.log(legolas.lancarFlecha())
console.log(legolas.lancarFlecha())
console.log(legolas.lancarFlecha())
console.log(legolas.lancarFlecha())
