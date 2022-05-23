const getDriving = 17
const yearNow = 2022

function devuelveLaEdad(birthYear) {
    return 2022 - birthYear
}

const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
const adults = birthYear.filter(age => devuelveLaEdad(age) > 17)

console.log(`These are the birth years of people who can drive: ${adults}`);