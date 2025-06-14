/* Loop inside Loops */
console.log("-----------------------------------------------------");
console.log("Loop inside Looping");

for (let i = 0; i < 3; i++) {
  console.log(`Outer loop iteration: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(` Inner loop iteration: ${j}`);
  }
}

/* Outpur: 
 i =0;j runs 3 times
 i =1;j runs 3 times 
 i =3;j runs 3 times 

 total iterations = 3 * 3 = 9
*/

console.log("-----------------------------------------------------");
console.log("Nested Looping");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
/* Output:
i=1, j=0
i=2, j=0
i=2, j=1
*/

console.log("-----------------------------------------------------");
console.log("Looping with condition");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

/* Output:
i=0, j=0
i=1, j=0
i=1, j=1
i=2, j=0
i=2, j=1
i=2, j=2
*/

console.log("-----------------------------------------------------");
console.log("Reverse Looping");

for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(`i=${i}, j=${j}`);
  }
}
/* Output:
i=0, j=0
i=1, j=1
i=2, j=2
i=2, j=1
i=2, j=0
*/

console.log("-----------------------------------------------------");
console.log("Reverse Looping with decrementing outer loop");

for (let i = 3; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
