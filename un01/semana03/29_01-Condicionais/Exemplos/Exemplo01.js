const temIngresso = true;
const censura = 16;
const idade = 14;

if (idade >= censura) {
    if (temIngresso === true) {
        console.log("Pode entrar!");
    } else {
        console.log("Você não pode entrar porque não possui ingresso!")
    }
} else {
    console.log(`Você não pode entrar por conta da censura do filme que é de ${censura} anos.`);
}