/* 
- Count Negative Numbers in an Array.
- Find Smallest Number in an Array.
- Find Largest Number in an Array.
*/


// Count Negative Numbers in an Array
const numbersArray = [-5, 3, -2, 8, -1, 4, -7, 6];
let negativeCount = 0;
for (let i =0 ; i < numbersArray.length; i++ ) {
    if (numbersArray[i] < 0 ) {
        negativeCount++;
    }
}
console.log("Count of negative numbers: " + negativeCount);

// Find smallest number in an array
const numArray = [12, 5, 8, 20, 3, 15];
let smallest = numArray[0];
for (let i = 1; i < numArray.length; i++ ) {
    if (numArray[i] < smallest) {
        smallest= numArray[i]; 
    }
}
console.log("Smallest number in the array: " + smallest);


// Largest number in an array 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let largest = arr[0];
for (let i = 1; i< arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number in the array: " + largest);
