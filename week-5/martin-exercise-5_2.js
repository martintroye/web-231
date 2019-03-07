/*
============================================
; Title: Exercise 5.2
; Author: Troy Martin
; Date: 03/05/2019
; Modified By: Troy Martin
; Description: Exercise 5.2 ES5 Built-In Functions, loop and output array values using foreach and predicate function.
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");

/*
; Expected output:
; Troy Martin
; Exercise 5.2
; Today's Date
;
; Pizza
; Prime Rib
; Chicken
; Grilled Cheese Sandwich
; Gyro
*/

// variable declaration and assignment

// array of favorite foods
const foods = ["Pizza", "Prime Rib", "Chicken", "Grilled Cheese Sandwich", "Gyro"];


// function declaration
/*
; Params: value
; Response: undefined
; Description: Function to output the value to the console.
*/
function printLn(value){
  // Call the console.log() function and output the value.
  console.log(value);
}


// output
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 5.2"), "\n");

// Use the Array forEach method to loop the array, use the printLn function as the predicate to output the array item to the console.
foods.forEach(printLn);

// end program
