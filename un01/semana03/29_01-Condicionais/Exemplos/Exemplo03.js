const temIngresso = true;
const censura = 16;
const idade = 14;
const acompanhadaPais = false

if ((idade >= censura || acompanhadaPais === true) && temIngresso === true) {
    console.log("Pode entrar!");
} else {
    console.log("Você não pode entrar!")
}