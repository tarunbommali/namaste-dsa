/* 
***Functions if-else***
-Function declaration : A function defined using the function keyword at the top level of code.

-Function expression : A function assigned to a variable.

-if-else statements
-loops 
    -while loop
    -for loop
-some programming 
*/


function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Tarun"));

function checkAge(age) {
    if (age < 18) {
        return "You are a minor.";
    } else if (age >= 18 && age < 65) {
        return "You are an adult.";
    } else {
        return "You are a senior citizen.";
    }
}
console.log(checkAge(24));