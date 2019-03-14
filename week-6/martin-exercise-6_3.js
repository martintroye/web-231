/*
============================================
; Title: Exercise 6.3
; Author: Troy Martin
; Date: 03/12/2019
; Modified By: Troy Martin
; Description: Exercise 6.3, Object Literals, create an object literal and display each property in a string
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 6.3"), "\n");

/*
; Expected output:
;
; FirstName LastName
; Exercise 6.3
; Today's Date
;
; {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// variable declaration and assignment

// declare a ticket object
var ticket = {
  id: 1000,
  name: 'John Doe',
  requester: 'Troy Martin'
};

// Call the console.log function to output a line for formatting
console.log("");
// Call the console.log function to output the property values of the ticket object.
console.log(`{id: ${ticket.id}, name: ${ticket.name}, requestor: ${ticket.requester}}`)

// end program
