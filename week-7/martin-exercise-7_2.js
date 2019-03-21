/*
============================================
; Title: Exercise 7.2
; Author: Troy Martin
; Date: 03/20/2019
; Modified By: Troy Martin
; Description: Exercise 7.2, Constructor functions, populate an array using a constructor object
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 7.2"), "\n");

/*
; Expected output:
;
; FirstName LastName
; Exercise 7.2
; Today's Date
;
; 1 Thomas Edison Software Engineer
; 2 Benjamin Franklin Programmer
; 3 Nikola Tesla Project Manager
; 4 Charles Babbage Product Manager
; 5 Alexander Bell Business Analyst
*/

// variable declaration and assignment
// Declare an array of Employee constructor objects
var employees = [
  // Using the new keyword create an instance of the Employee function passing in various arguments.
  new Employee(1, "Thomas", "Edison", "Software Engineer"),
  new Employee(2, "Benjamin", "Franklin", "Programmer"),
  new Employee(3, "Nikola", "Tesla", "Project Manager"),
  new Employee(4, "Charles", "Babbage", "Product Manager"),
  new Employee(5, "Alexander", "Bell", "Business Analyst")
];

// function declaration
/*
; Params: id: number, firstName: string, lastName: string, title: string
; Response: undefined.
; Description: Function defining an employee.
*/
function Employee(id, firstName, lastName, title){
  // Set the properties of the function to the parameter value
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

/*
; Params: employee: Employee
; Response: undefined.
; Description: Function to write the Employee information out to the console.
*/
function printLn (employee){
  // Call the console.log function to output the property values of the Employee
  console.log(`${employee.id} ${employee.firstName} ${employee.lastName} ${employee.title}`);
}

// Call the console.log function to output a formatting line.
console.log("");
// Using the Array forEach method loop the employees array and call the printLn function to output the Employee information to the console.
employees.forEach(printLn);

// end program
