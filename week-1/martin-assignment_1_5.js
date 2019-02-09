/*
============================================
; Title: Assignment 1.5
; Author: Troy Martin
; Date: 02/08/2019
; Modified By: Troy Martin
; Description: Types, values and variables
;===========================================
*/
// start program

/*
; Expected output:
; Create 3 employee records with the following fields (this means there should be 3 firstName variables, 3 lastName variables, 3 address variables, 3 payRate variables, and 3 hireDate variables)
;   firstName
;   lastName
;   address
;   payRate
;   hireDate
; Format the payRate to one decimal place (see page 48 of the courses textbook)
; Format the hireDate using "slashes" (see page 35 of the courses textbook; use JavaScript's built-in new Date() object)
*/

// variable declaration and assignment goes here...
var firstNameA = "John";
var lastNameA = "Doe";
var addressA = "1617 Hays Drive";
var payRateA = 26.50;
// month is 0 based
var hireDateA = new Date(2014, 7, 11);

var firstNameB = "Betty";
var lastNameB = "Smith";
var addressB = "2011 North 63rd";
var payRateB = 20.25;
var hireDateB = new Date(2018, 3, 16);

var firstNameC = "Fred";
var lastNameC = "Johnson";
var addressC = "2008 South Hillview Road"
var payRateC = 20.18;
var hireDateC = new Date(2000, 5, 8);

// output
console.log(firstNameA);
console.log(lastNameA);
console.log(addressA);
// formating to display one decimal place while leaving original value
console.log(payRateA.toFixed(1));
// format the date without modifying the original value
console.log(hireDateA.toLocaleDateString("en-US"));

console.log(firstNameB);
console.log(lastNameB);
console.log(addressB);
console.log(payRateB.toFixed(1));
console.log(hireDateB.toLocaleDateString("en-US"));

console.log(firstNameC);
console.log(lastNameC);
console.log(addressC);
console.log(payRateC.toFixed(1));
console.log(hireDateC.toLocaleDateString("en-US"));

// end program