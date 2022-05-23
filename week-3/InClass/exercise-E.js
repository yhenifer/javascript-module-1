function age(birthYear) {
    return 2022 - birthYear
}

let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let ages = birthYears.map(age) 

console.log(birthYears);
console.log(ages)