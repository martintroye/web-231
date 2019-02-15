/*
============================================
; Title: Exercise 2.2
; Author: Troy Martin
; Date: 02/14/2019
; Modified By: Troy Martin
; Description: Test the display function defined in header.js
;===========================================
*/
// start program

// import the display function to test the output
const header = require('./martin-header.js');


/*
; Expected output:
; The display function will output the supplied first name, last name and assignment to the console.
*/

var firstName = "Troy";
var lastName = "Martin";
var assignment = "Exercise 2.2";

// output
console.log(header.display(firstName, lastName, assignment));

// end program
