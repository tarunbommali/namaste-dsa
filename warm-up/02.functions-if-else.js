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

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Tarun"));

// Sum of two integers
function sum(a, b) {
  return a + b;
}
let x = 5;
let y = 10;
console.log("Sum of x and y is: " + sum(x, y));

// square of a number
function square(num) {
  return num * num;
}
const result = square(4);
console.log("Square of 4 is: " + result);

// odd or even number
function isEvenOdd(num) {
  let rem = num % 2 == 0;
  if (rem) {
    return `${num} is an even number.`;
  } else {
    return `${num} is an odd number.`;
  }
}
console.log(isEvenOdd(7));

// funciton expression - checking voting eligibility.
const checkAge = function (age) {
  // if-else statements to check age
  if (age < 1) {
    return "Invalide age.";
  } else if (age < 18) {
    return "Not eligible to vote.";
  } else {
    return "Eligible to vote.";
  }
};
console.log(checkAge(24));


// while loop
let i = 5;
while (i > 0) {
  console.log("Hello World! " + i);
  i--;
}

// for loop
for (let j = 0; j < 5; j++) {
  console.log("Hello World! " + j);
}
