var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";



function hacerMayuscula(mentor){
    const nombreEnmayusculas = mentor.toUpperCase();
return nombreEnmayusculas;
}

function saludoAgritos(mentor) {
return "HELLO" +" "+ hacerMayuscula(mentor)

}

console.log(saludoAgritos (mentor1));
console.log(saludoAgritos (mentor2));
console.log(saludoAgritos (mentor3));
console.log(saludoAgritos (mentor4));
console.log(saludoAgritos (mentor5));
