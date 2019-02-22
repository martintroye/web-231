/*
============================================
; Title: baumann-discussion-3.1.js
; Author: Professor Krasso
; Date:   19 February 2019
; Modified By: Reva Baumann
; Description: Program that uses for, while, if or switch statements with two errors.
;===========================================
*/

/*
    Expected output:
    FirstName LastName
    Discussion 3.1
    Today's Date
*/

// lists details of formatted header, including first name, last name and assignment

const header = require('../martin-header.js');

console.log(header.display("Reva", "Baumann", "Discussion 3.1"));

/*
; Expected Output:
; The cat is a feline and lists families of various carnivora that are false.
*/

// start program


var cat = "Felidae";

// martin - Fixed formatting to indent two spaces instead of four, fixed quotes on all string literals, changed all if statements to use a strict comparison.
if (cat === "Canidae") {
  console.log("The scientific order Carnivora, possesses Cat, which is under this Family " + cat + "!");
  // else if statement, checking value of cat against string value, false values move to next statement.

// martin - Variable choice does not exist change to the variable cat which has been defined.
} else if (cat === "Ursidae") { // else if statement, checking value of cat against string value, false values move to next statement.
  console.log("The scientific order Carnivora, possesses Cat, which is under this Family " + cat + "!");

// martin - Variable choice does not exist change to the variable cat which has been defined.
} else if (cat === "Felidae") { // else if statement, checking value of cat against string value, false values move to next statement.
  // martin - Extra parenthesis is not technically an error but cleaned up since grouping is not needed
  console.log("The scientific order Carnivora, possesses Cat, which is under this Family " + cat + "!");

// martin - Variable choice does not exist change to the variable cat which has been defined.
} else if (cat === "Mustelidae") { // else if statement, checking value of cat against string value, false values move to next statement.
  console.log("The scientific order Carnivora, possesses Cat, which is under this Family " + cat + "!");

} else {  // if all values are false, output to console.log
  console.log("What are you, a herbivore?");
}

// end program
