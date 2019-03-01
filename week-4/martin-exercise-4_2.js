/*
============================================
; Title: Exercise 4.2
; Author: Troy Martin
; Date: 02/27/2019
; Modified By: Troy Martin
; Description: Arrays, output the values of an array to the console
;===========================================
*/
// start program
// Require statement that imports the martin-header.js file from my root directory.
const header = require("../header.js");

/*
; Expected output:
; FirstName LastName
; Exercise 4.2
; Today's Date
;
; Apple
; Orange
; Banana
; Mango
; Pear
*/

// variable declaration and assignment
// An array variable to hold list of fruits
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function declaration

/*
; Params: list
; Response: undefined
; Description: Log a message to the console for each item in the array.
*/
function getFruit(list){
  // Using the isArray function make sure that the parameter is an Array
  if(Array.isArray(list) !== true){
    // If not an Array throw an error
    throw Error("The parameter list, must be a valid array.")
  }

  // Call the forEach function from the Array prototype to loop the array
  list.forEach(item => {
      // Call the console.log function to output the value of the item in the array
      console.log(item)
  });
}

// output
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 4.2"), "\n");

// Call the getFruit function to output the values of the fruits array
getFruit(fruits);

// end program
