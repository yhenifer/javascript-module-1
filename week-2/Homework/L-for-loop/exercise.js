/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;

function sumTillNum(num){
let suma = 0	//your code here
for (let counter=0; counter<= num; counter ++){
	suma += counter
}
return suma;
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
