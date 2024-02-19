// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho = [
    {
        item: tv,
        quantidade: 1
    },
    {
        item: caboUsb,
        quantidade: 2
    },
    {
        item: webcam,
        quantidade: 1
    },
];

carlos.carrinho = [
    {
        item: notebook,
        quantidade: 2
    }
];

patricia.carrinho = [
    {
        item: teclado,
        quantidade: 1
    },
    {
        item: caboUsb,
        quantidade: 2
    },
    {
        item: carregador,
        quantidade: 1
    },
    {
        item: mouse,
        quantidade: 1
    },
    {
        item: monitor,
        quantidade: 1
    },
];

renato.carrinho = [
    {
        item: webcam,
        quantidade: 5
    }
];

roberto.carrinho = [
    {
        item: webcam,
        quantidade: 1
    },
    {
        item: caboUsb,
        quantidade: 2
    },
    {
        item: monitor,
        quantidade: 1
    },
];

console.log("Itens do José: ", jose.carrinho);
console.log("Itens do Carlos: ", carlos.carrinho);
console.log("Itens do Patrícia: ", patricia.carrinho);
console.log("Itens do Renato: ", renato.carrinho);
console.log("Itens do Roberto: ", roberto.carrinho);