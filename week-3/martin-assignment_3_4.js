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
const header = require("../martin-header.js");

/*
; Expected output:
;
; FirstName LastName
; Exercise 3.3
; Today's Date
;
; Output from the number match loop
;
*/

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!

  Create a variable and assign it a value between 1 and 10

  Take the functions you wrote in exercise 3.2 (match, logMismatch and logMatch) and copy them to this week's assignment.

  Create a for loop with 10 iterations and inside the body of the for loop create a local variable and assign it a random number between 1 and 10
  (use the randomNumber function I have provided in the starter code)

  During each iteration of the for loop the random number should be reassigned a new random value (this means the placement of the variable should
    be inside the for loop).

  Next, create an if...else statement and use the match function to test if the variable in step one matches the random number created in step 3.
  For true, call the logMatch function using the same two values.  For false, call the logMismatch function using the same two values.  If it is not
  obviously by now, you are basically wrapping a for loop around the work you did in exercise 3.2.  And, instead of using multiple if...else statements
  and test variables you will be using a for loop to generate the test variables and one if..else statement to check the generated values.

*/

// variable declaration and assignment goes here...
var firstName = "Troy";
var lastName = "Martin";
var assignment = "<Assignment>";

// function declaration

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display(firstName, lastName, assignment), "\n");


// output
console.log("<output>");
// end program
