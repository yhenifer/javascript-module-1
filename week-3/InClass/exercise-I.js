const articulos = [ 100, "iSMael", 55, 45, "sANyiA", 66, "JaMEs", "eLAmIn", 23, "IsMael", 67, 19, "ElaMIN",];

function esString (articulo) {
    return typeof articulo === "string"
}

function hazLaMagia (array) {
    return articulos.filter(esString).map(articulo => `${articulo.toUpperCase()}!`)
}

console.log(hazLaMagia(articulos));