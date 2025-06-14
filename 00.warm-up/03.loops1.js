/* 
***Loops in javascript***
Loops are used to execute a block of code repeatedly until a specified
condition is met. In JavaScript, there are several types of loops, 
including `for`, `while`, and `do...while` loops.
*/


// Print all even number in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
const oddNumbers = [];
for (let i =0 ; i< numbers.length; i++) {
    if (numbers[i] % 2 ===0 ) {
        evenNumbers.push(numbers[i]);
    }else{
        oddNumbers.push(numbers[i])
    }
}

console.log("Even numbers: " , evenNumbers)
