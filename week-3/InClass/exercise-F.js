const getDriving = 17
const yearNow = 2022

function devuelveLaEdad(birthYear) {
    return 2022 - birthYear
}

function getDrivingStatus(birthYear) {
    const age = devuelveLaEdad(birthYear)
if (age >=17) {
    return `Born in ${birthYear} can driver`
    
}else {
    const yearsToDrive = 17 - age
    return `Born in ${birthYear} can driver in ${yearsToDrive} years`
}   
     
}

const birthYears = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]

birthYears.map(getDrivingStatus).forEach(status => console.log(status));


