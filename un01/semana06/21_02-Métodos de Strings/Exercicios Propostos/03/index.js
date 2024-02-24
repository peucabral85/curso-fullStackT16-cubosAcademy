const texto = "Aprenda programar do zero na Cubos Academy";

function formatarUrlComHifen(textoUrl) {
    while (textoUrl != textoUrl.replace(" ", "-")) {
        textoUrl = textoUrl.replace(" ", "-").toLowerCase();
    }
    return textoUrl;
}

console.log(formatarUrlComHifen(texto));