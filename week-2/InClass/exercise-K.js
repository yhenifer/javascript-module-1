let estudiantes = ["Mateo","Marcos","Lucas","Juan","Pedro"]

function MostrarEstudiantes (estudiantes){
    for (let posicionArrayEstudiantes = 0; posicionArrayEstudiantes < estudiantes.length ; posicionArrayEstudiantes ++){
        const estudiante = estudiantes[posicionArrayEstudiantes];
        console.log("soy " + estudiante+ " y estudio ingenieria ambiental en la UPC");
    }

}


MostrarEstudiantes(["Mateo","Marcos","Lucas","Juan","Pedro"])



///Write a function which takes your students array as an input. In the function, use a for loop to iterate over the array and print the name of each student to the console.//
