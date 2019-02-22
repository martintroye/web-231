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
; Troy Martin
; Exercise 3.3
; Today's Date
;
; The enter key was pressed
;
*/

// variable declaration and assignment goes here...
let eventKeyCode = 13

// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 3.3"), "\n");


// output
// Switch statement to evaluate the variable eventKeyCode and select the proper console.log statement based on the value.
switch(eventKeyCode){
  // Case evaluates the value for a match
  case 13:
    // Call the console.log function to output the message
    console.log('The enter key was pressed.');
    // Break causes the program to leave the switch statement
    break;
  case 16:
    // Call the console.log function to output the message
    console.log('The shift key was pressed.')
    // Break causes the program to leave the switch statement
    break;
  case 32:
    // Call the console.log function to output the message
    console.log('The spacebar key was pressed.')
    // Break causes the program to leave the switch statement
    break;
  case 8:
    // Call the console.log function to output the message
    console.log('The backspace / delete key was pressed.')
    // Break causes the program to leave the switch statement
    break;
  // Default is the catch all for the switch statement if the value does not match a case
  default:
    // Call the console.log function to output the message
    console.log('Unrecognized key.')
    // Break causes the program to leave the switch statement
    break;
}

// end program
