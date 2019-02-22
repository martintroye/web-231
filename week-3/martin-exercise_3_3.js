/*
============================================
; Title: Exercise 3.3
; Author: Troy Martin
; Date: 02/21/2019
; Modified By: Troy Martin
; Description: Control statements -  Replace the series of if...else statements with a switch block.
;===========================================
*/
// start program

// Require statement that imports the martin-header.js file from my root directory.
const header = require("../martin-header.js");

/*
; Expected output:
;
; FirstName LastName
; Exercise 3.3
; Today's Date
;
; The enter key was pressed
;
*/

/*
  Expected output:



  // Expected output

*/

let eventKeyCode = 13

if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}


// variable declaration and assignment goes here...
var firstName = "Troy";
var lastName = "Martin";
var assignment = "<Assignment>";


// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display(firstName, lastName, assignment), "\n");


// output
console.log("<output>");
// end program
