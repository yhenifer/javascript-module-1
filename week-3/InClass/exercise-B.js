let array = [ "Javier", "Jorgelina", "Laeken", "Vanessa", "Yhenifer", "Linda", "Diego", "Eliana" ];

let arrayIngles = [ "Gloria", "Mateo"];

let result = array.concat(arrayIngles);

function verificarPersona(nombre,arr){
    if (!arr.includes(nombre)){
        return nombre + " is not at the class with " + arr

    }else{
        return nombre + " is at the class with " + arr
    }
   
}

console.log(result.sort());

console.log(verificarPersona ("Gloria", array))