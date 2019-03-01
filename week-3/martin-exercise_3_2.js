/*
============================================
; Title: Exercise 3.2
; Author: Troy Martin
; Date: 02/20/2019
; Modified By: Troy Martin
; Description: Pattern matching functions, incorporate logical error handling in an application
;===========================================
*/
// start program

// Require statement that imports the martin-header.js file from my root directory.
const header = require("../header.js");

/*
; Expected output:
; Troy Martin
; Exercise 3.2
; Today's Date
;
; match output:
; false
; true
;
; if else statements:
; Tractor and Trailer do not match.
; 1 and 1 match.
; Tractor and 1 do not match.
;
; Output comparing the remaining combinations of variables
*/

// variable declaration and assignment

// variables for header
var firstName = "Troy";
var lastName = "Martin";
var assignment = "Exercise 3.2";

// variables used to test the match function
var testValueA = "Tractor";
var testValueB = "Trailer";
var testValueC = 1;
var testValueD = 1;
var testValueE = "Tractor";
var testValueF = 1;

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

// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display(firstName, lastName, assignment), "\n");

// output
// Call the console.log() function and output a test of the match function when the values do not match
console.log(match("a", "Z"));
// Call the console.log() function and output a test of the match function when the values match
console.log(match(1, 1), "\n");

// Call the match() function comparing test variables and use an if/else statement to log the match or mismatch based on the results
if(match(testValueA, testValueB) === true){
  // match function returns true, output the match message
  logMatch(testValueA, testValueB);
} else{
  // match function returns false, output the mismatch message
  logMismatch(testValueA, testValueB);
}

// Call the match() function comparing test variables and use an if/else statement to log the match or mismatch based on the results
if(match(testValueC, testValueD) === true){
  // match function returns true, output the match message
  logMatch(testValueC, testValueD);
} else{
  // match function returns false, output the mismatch message
  logMismatch(testValueC, testValueD);
}

// Call the match() function comparing test variables and use an if/else statement to log the match or mismatch based on the results
if(match(testValueE, testValueF) === true){
  // match function returns true, output the match message
  logMatch(testValueE, testValueF);
} else{
  // match function returns false, output the mismatch message
  logMismatch(testValueE, testValueF);
}

// These statements will test the remaining possible variable combinations
// Call the match() function comparing test variables and use a ternary if for a condensed version of the if/else to log the match or mismatch based on the results
console.log("\ntestValueA");
match(testValueA, testValueC) === true ? logMatch(testValueA, testValueC) : logMismatch(testValueA, testValueC);
match(testValueA, testValueD) === true ? logMatch(testValueA, testValueD) : logMismatch(testValueA, testValueD);
match(testValueA, testValueE) === true ? logMatch(testValueA, testValueE) : logMismatch(testValueA, testValueE);
match(testValueA, testValueF) === true ? logMatch(testValueA, testValueF) : logMismatch(testValueA, testValueF);

console.log("\ntestValueB");
match(testValueB, testValueC) === true ? logMatch(testValueB, testValueC) : logMismatch(testValueB, testValueC);
match(testValueB, testValueD) === true ? logMatch(testValueB, testValueD) : logMismatch(testValueB, testValueD);
match(testValueB, testValueE) === true ? logMatch(testValueB, testValueE) : logMismatch(testValueB, testValueE);
match(testValueB, testValueF) === true ? logMatch(testValueB, testValueF) : logMismatch(testValueB, testValueF);

console.log("\ntestValueC");
match(testValueC, testValueA) === true ? logMatch(testValueC, testValueA) : logMismatch(testValueC, testValueA);
match(testValueC, testValueB) === true ? logMatch(testValueC, testValueB) : logMismatch(testValueC, testValueB);
match(testValueC, testValueE) === true ? logMatch(testValueC, testValueE) : logMismatch(testValueC, testValueE);
match(testValueC, testValueF) === true ? logMatch(testValueC, testValueF) : logMismatch(testValueC, testValueF);

console.log("\ntestValueD");
match(testValueD, testValueA) === true ? logMatch(testValueD, testValueA) : logMismatch(testValueD, testValueA);
match(testValueD, testValueB) === true ? logMatch(testValueD, testValueB) : logMismatch(testValueD, testValueB);
match(testValueD, testValueE) === true ? logMatch(testValueD, testValueE) : logMismatch(testValueD, testValueE);
match(testValueD, testValueF) === true ? logMatch(testValueD, testValueF) : logMismatch(testValueD, testValueF);

console.log("\ntestValueE");
match(testValueE, testValueA) === true ? logMatch(testValueE, testValueA) : logMismatch(testValueE, testValueA);
match(testValueE, testValueB) === true ? logMatch(testValueE, testValueB) : logMismatch(testValueE, testValueB);
match(testValueE, testValueC) === true ? logMatch(testValueE, testValueC) : logMismatch(testValueE, testValueC);
match(testValueE, testValueD) === true ? logMatch(testValueE, testValueD) : logMismatch(testValueE, testValueD);

console.log("\ntestValueF");
match(testValueF, testValueA) === true ? logMatch(testValueF, testValueA) : logMismatch(testValueF, testValueA);
match(testValueF, testValueB) === true ? logMatch(testValueF, testValueB) : logMismatch(testValueF, testValueB);
match(testValueF, testValueC) === true ? logMatch(testValueF, testValueC) : logMismatch(testValueF, testValueC);
match(testValueF, testValueD) === true ? logMatch(testValueF, testValueD) : logMismatch(testValueF, testValueD);

// end program
