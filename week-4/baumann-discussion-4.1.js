/*
============================================
; Title: baumann-discussion-4.1.js
; Author: Reva Baumann
; Date:   27 February 2019
; Modified By: Reva Baumann
; Description: Simple JavaScript program that uses an array with two (2) problems
;===========================================
*/

/*
    Expected output:
    FirstName LastName
    Discussion 4.1
    Today's Date
    // Expected output: Program that uses arrays with at least 2 errors

*/

// lists details of formatted header, including first name, last name and assignment

// martin - Pointed the required header to the default in my root folder
const header = require('../header.js');
console.log(header.display("Reva", "Baumann", "Discussion 4.1"));

// start program
// martin - When declaring the animals array there was an unterminated string, fox, in the values initializing the array
var animals = new Array("cat", "dog", "hedgehog", "fox"); // declare an array value under four (4) elements
// martin - When calling the console.log function and outputting the variable someValue, fixed the spelling of somValue to someValue
var someValue = animals[2]; // returns the third element in a 0 indexed array
console.log(someValue); // if someValue has a value of undefined, then it defaults to object
var someArray = new Array ("bear"); // add new element of "bear"
// martin - When declaring the new array a space was missing between the new keyword and the Array declaration
var someOtherArray = new Array ("wolf"); // add new element of "wolf"
// end program
