/*
============================================
; Title: Assignment 3.4
; Author: Troy Martin
; Date: 02/21/2019
; Modified By: Troy Martin
; Description: Loops
;===========================================
*/
// start program

// Require statement that imports the martin-header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Assignment 3.4"), "\n");

/*
; Expected output:
;
; Troy Martin
; Exercise 3.4
; Today's Date
;
; Output from the number match game
; 10 results compared to the global variable value
*/

// variable declaration and assignment

// This is the value we are trying to match the random number with
var value = 6;

// function declaration

/*
; Params: valueA, valueB
; Response: True or False
; Description: True, if valueA equals valueB. False, if valueA equals valueB.
*/
function match(valueA, valueB){
  // Compare the parameters and return true or false based on the comparison
  return valueB === valueA;
}

/*
; Params: valueA, valueB
; Response: undefined
; Description: Log a message to the console describing that the parameters do not match.
*/
function logMismatch(valueA, valueB){
  // log a message that the parameters do not match
  console.log(`${valueA} and ${valueB} do not match!`);
}

/*
; Params: valueA, valueB
; Response: undefined
; Description: Log a message to the console describing the parameters match.
*/
function logMatch(valueA, valueB){
  // log a message that the parameters match
  console.log(`${valueA} and ${valueB} match!`);
}


/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// output
// For loop running 10 times
for(var i = 0; i < 10; i++){
  // Call the randomNumber function and assign the value to a local variable
  var randomValue = randomNumber();
  // Call the match function to compare the random value against the global value
  if(match(randomValue, value) === true){
    // The values match, call the logMatch function to write out the message
    logMatch(randomValue, value);
  } else{
    // The values do not match, call the logMismatch function to write out the message that the values do not match
    logMismatch(randomValue, value);
  }
}

// end program
