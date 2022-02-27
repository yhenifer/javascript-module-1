
function GastosA(pers1) {
    const ingresos = 2500;
    return ingresos - pers1;
    
}

console.log (GastosA(800))

function GastosB(pers2) {
    const ingresos = 2500;
    return ingresos - pers2;
    
}

console.log (GastosB(1000))

function DiferenciaGastos(pers1, pers2) {
    return pers1 - pers2;

    
}
const resta = DiferenciaGastos (1700, 1500)


console.log(resta);

function result (pers1, pers2, resta) {
    return "Yo  he  gastado este mes " + GastosA(pers1) + " pero  mi padre a gastado  " + GastosB(pers2) + " tenemos de diferencia " + resta + " euros"
    
}  

console.log(result(1700,1500,200));



