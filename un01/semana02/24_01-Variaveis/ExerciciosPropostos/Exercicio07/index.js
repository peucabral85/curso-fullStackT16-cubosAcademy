//Casos de COVID-19

let po = 1000; //população inicial de pessoas infectadas
let x = 4; // quantidade de pessoas para as quais um paciente infectado pode transmitir
let t = 100; // tempo percorrido
let p; // quantidade de pessoas infectadas após decorrido o tempo t

p = po * (x ** (t / t));

console.log(`O total de pessoas infectadas é de ${p}`);
