function borndate(age) {
    const year=2022
    return year - age
  }
  
  console.log(borndate(26));



function introduce (personName, age) {
    return "hola me llamo " +personName + "y naci en " + borndate(age) }

console.log (introduce ("Yhenifer",26))

