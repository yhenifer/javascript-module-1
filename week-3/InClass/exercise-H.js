const nombres = ["Yenifer", "Linda", "Laeken", "Javier"];

function miNombreEstaIncluido (nombres) {
    if (nombres.find(name => name === "Vanessa")){
        return "Me!"
        } else {
            return "Not me!"
        }
}

console.log(miNombreEstaIncluido(nombres));