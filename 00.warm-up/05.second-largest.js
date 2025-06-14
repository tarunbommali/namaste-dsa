/*
- Problem: Find the second largest number in an array.
*/

function findScondLargest(arr) {
  if (arr.lenghth < 2) {
    return "Array must contain at least tow elements.";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity
    ? "No second largest number found."
    : secondLargest;
}

console.log(findScondLargest([3, 5, 1, 8, 2])); // Output: 5

/*.......................................................*/
// Another approach to find the second largest number in an array
function getSecondLargest(arr) {
  let n = arr.length;

  // Sort the array.We are using the arrow function syntax  for overcome lexical scoping issues.
  arr.sort((a, b) => a - b);

  for (let i = n - 2; i >= 0; i--) {
    // return the first element which is not equal to the
    // largest element
    if (arr[i] !== arr[n - 1]) {
      return arr[i];
    }
  }

  // If no second largest element was found, return -1
  return -1;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr));
