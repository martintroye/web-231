/*
============================================
; Title: Exercise 4.2
; Author: Troy Martin
; Date: 02/27/2019
; Modified By: Troy Martin
; Description: Arrays, using arrays
;===========================================
*/
// start program
// Require statement that imports the martin-header.js file from my root directory.
const header = require("../header.js");

/*
Create a string array of five (5) fruit items (order does not matter).
Create a function called getFruit with one parameter (an array)
In the body of the getFruit function iterate over the parameterized array (see step 2) and output the results using the console.log() function.
Call the getFruit function and pass-in the array created in step 1 to test the results.
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
; Params: fruit
; Response: undefined
; Description: Log a message to the console for each item in the array.
*/
function getFruit(fruits){
    // Call the forEach function on the Array to loop each element in the array
    fruits.forEach(item => {
        // Call the console.log function to output the value of the item in the array
        console.log(item)
    });
}

// output
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 4.2"), "\n");

// Call the getFruit function to output the values of the fruit array
getFruit(fruits);

// end program
