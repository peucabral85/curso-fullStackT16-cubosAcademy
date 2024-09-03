const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map((fruta, indice) => {
    return `${indice} - ${fruta.charAt(0).toUpperCase()}${fruta.slice(1).toLowerCase()}`;
})

console.log(novoArray);