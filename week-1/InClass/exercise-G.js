const studentsMat = 10
const studentsGeo =5
const NumerodeEstudiantes = studentsMat + studentsGeo;

const mentMat = 4
const mentGeo =4
const NumerodeMentores = mentMat + mentGeo;

const  estudianMentores = NumerodeEstudiantes + NumerodeMentores

const  porEstudiantes = Math.round ((100* NumerodeEstudiantes/ estudianMentores ))
const  porMentores =   Math.round ((100* NumerodeMentores/ estudianMentores))

console.log("porcentaje de Estudiantes: " + porEstudiantes, "%", "Porcentaje de Mentores:" + porMentores, "%");


