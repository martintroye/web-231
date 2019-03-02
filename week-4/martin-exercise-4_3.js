/*
============================================
; Title: Exercise 4.3
; Author: Troy Martin
; Date: 02/27/2019
; Modified By: Troy Martin
; Description: Filtering, use conditionals to determine the equality of an array value
;===========================================
*/
// start program
// Require statement that imports the martin-header.js file from my root directory.
const header = require("../header.js");

/*
;  Expected output:
;
; Troy Martin
; Exercise 4.3
; Today's Date
;
; -- DISPLAYING ARRAY ITEMS --
; Car
; Truck
; Motorcycle
; Airplane
; Bus
;
; -- SELECTED VALUE --
; Motorcycle
;
; -- SELECTED VALUE --
; Bus
*/


// variable declaration and assignment
// Declare an array to hold a list of vehicles.
const vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]

// function declaration

/*
; Params: list - an array, value - a string
; Response: undefined
; Description: Function loops through the list array and outputs the matching value if found.
*/
function getValue(list, value){
  // Use the Array isArray method to validate that the list is an array before trying to iterate
  if(Array.isArray(list) === true){
    // Use the Array foreach method to iterate over the list of vehicles
    list.forEach(element => {
      // Conditional statement to compare the value parameter to the vehicle in the array
      if(element === value){
        // Call the console.log method to output the matching vehicle
        console.log(element);
      }
    });
  }
}

// output
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 4.3"), "\n");

console.log("-- DISPLAYING ARRAY ITEMS --");
// Use the Array foreach method to loop the array and call the console.log function to output the value
vehicles.forEach(item => console.log(item));

console.log("\n");
console.log("-- SELECTED VALUE --")
// Call the getValue function to find a match
getValue(vehicles, "Motorcycle");

console.log("\n");
console.log("-- SELECTED VALUE --")
// Call the getValue function to find a match
getValue(vehicles, "Bus");

// end program
