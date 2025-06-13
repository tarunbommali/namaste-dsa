/* 
***PROGRAMMING 101***
-Variable Declearation 
-Data types [String, Number, Booleon]
-Two Variables
-const vs let
-Array
-Object

*/


let firstName = "Tarun";
let lastName = "Bommali";
let age = 24;

// Using const for variables that won't change
const registrationNumber = "123456";

// Boolean variable
let isStudent = false;

// Array
let hobbies = ["Reading", "Coding", "Gaming"];

// Object 
let person = {
    firstName: "Tarun",
    lastName: "Bommali",
    age: 24,
    hobbies: ["Reading", "Coding", "Gaming"]
};

isStudent = true; // Changing the value of isStudent

// String concatenation of two variables
const fullName = firstName + " " + lastName;

console.log("FullName: "+fullName);
console.log("Age: " + age)

// This will cause an error because registrationNumber is a constant
// registrationNumber = '654321'; 



// Data types
console.log("Is student: " + isStudent);


// Array methods
console.log("Hobbies: " + hobbies.join(", "));
console.log("Hobbies: " , hobbies.map((hobby, index) => `${index + 1}. ${hobby}`).join(", "));


// Object methods
console.log("Person keys: ", Object.keys(person).map(key => `${key}: ${person[key]}`).join(", "));
console.log("Person entries: " , Object.entries(person).map(([key, value]) => `${key}: ${value}`).join(", "));
console.log("Person: ", Object.keys(person));


