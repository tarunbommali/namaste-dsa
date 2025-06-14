/* Star Patterns
 */

console.log("-----------------------------------------------------");
console.log("n*n star square patterns");
let n = 5;
for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    str += "*";
  }
  console.log(str);
}


console.log("-----------------------------------------------------");
console.log("Right-angled triangle star pattern");
let k = 5;
for (let i =0 ; i< k ; i++) {
    let str = "";
    for (let j= 0 ; j < k; j++) {
        str = "* ".repeat(i + 1);
    }
    console.log(str);
}