/*
============================================
; Title: Exercise 6.2
; Author: Troy Martin
; Date: 03/12/2019
; Modified By: Troy Martin
; Description: Exercise 6.2, Exception handling, throw and catch an exception
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 6.2"), "\n");

/*
; Expected output:
;
; Troy Martin
; Exercise 6.2
; Today's Date
;
; Catch clause: Invalid scale ticket cannot be null or undefined.
; Finally clause reached...
*/

// variable declaration and assignment


// function declaration
/*
; Params: {id: number, weight: number, moisture: number, createdOn: Date}
; Response: undefined.
; Description: Function to validate a scale ticket.
*/
function validateScaleTicket (scaleTicket){

  // Test to see if the scale ticket is null or undefined then throw an error if it is
  if(scaleTicket === null
    || scaleTicket === undefined){
      // Throw a new error, letting the user know that the scale ticket was not defined properly
      throw new Error("Invalid scale ticket cannot be null or undefined.")
    }
}

/*
; Params: message: string
; Response: undefined.
; Description: Function to write a message out to the console.
*/
function printLn (message){
  // Call the console.log function to output the property values of the scaleTicket
  console.log(message);
}

// output
// Call the console.log function to output a line for formatting
console.log("");

// Initialize the try catch block
try{
  // Call the validateScaleTicket function with a null to force an error
  validateScaleTicket(null);
}
// Define a catch block with the err parameter to contain the error message
catch(err){
  // Call the printLn function to print the error message to the console
  printLn(`Catch clause: ${err}`);
}
// Define a finally block. The finally block will execute even if there is not an error
finally{
  // Call the printLn function to print a message out to the console
  printLn("Finally clause reached...");
}

// end program
