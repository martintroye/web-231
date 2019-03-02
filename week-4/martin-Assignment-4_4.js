/*
============================================
; Title: Assignment 4.4
; Author: Troy Martin
; Date: 02/27/2019
; Modified By: Troy Martin
; Description: Predicates, create a predicate method to filter an array
;===========================================
*/
// start program
// Require statement that imports the martin-header.js file from my root directory.
const header = require("../header.js");

/*
;  Troy Martin
;  Assignment 4.4
;  Today's Date
;
;  -- ORIGINAL ARRAY --
;  Alabama
;  Nebraska
;  Iowa
;  California
;  Nevada
;
;  -- SORTED ARRAY --
;  Alabama
;  California
;  Iowa
;  Nebraska
;  Nevada
;
;  -- SELECTED VALUE --
;  Iowa
*/

// variable declaration and assignment

// Declare an array to hold a list of states
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
// Declare an empty array to hold the results of filtering the list of states.
var filteredStates = [];

// function declaration

/*
; Params: argA, argB
; Response: true, false
; Description: Function to compare the values of argA and argB and return true if they match, false if they do not.
*/
function getState(argA, argB){
  // Compare argA to argB returning true if they match or false if they do not
  return argA === argB;
}

// output
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Assignment 4.4"), "\n");

console.log("-- ORIGINAL ARRAY --")
// Using the Array forEach method loop the list of states and call the console.log function to output the value.
states.forEach(value => console.log(value));
console.log("\n");

console.log("-- SORTED ARRAY --")
// Use the Array sort method to sort the array in alphabetical order, The Array sort function, sorts the array in place. Since it is an alphabetical sort of strings a predicate sorting function is not required.
states.sort();
// Using the Array forEach method loop the list of states and call the console.log function to output the value.
states.forEach(value => console.log(value));

// Using the Array filter method and the getState function filter the list of states.
filteredStates = states.filter(function(value){
  // Set a variable in the predicate to hold the filter value
  var filterValue = "Iowa";
  // Call the getState function to return true if the value from the array matches the filterValue
  return getState(value, filterValue);
});

console.log("\n");
console.log("-- SELECTED VALUE --")
// Call the console.log function to output the first value of the filtered list of states
console.log(filteredStates[0]);

// end program
