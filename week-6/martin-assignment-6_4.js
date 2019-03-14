/*
============================================
; Title: Assignment 6.4
; Author: Troy Martin
; Date: 03/12/2019
; Modified By: Troy Martin
; Description: Assignment 6.4, Nested Object Literal, create a nested object and display the results
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Assignment 6.4"), "\n");

/*
; Expected output:
;
; FirstName LastName
; Assignment 6.4
; Today's Date
;
; Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// variable declaration and assignment
// Declare variables to hold a seed value for the ticket and person id.
var personIdSeedValue = 1000;
var ticketIdSeedValue = 105;

// Declare a ticket variable and initialize by calling the createTicket function, passing the name, priority and calling the createPerson function to create a person for the ticket
var helpDeskTicket = createTicket("Help Desk", "High", createPerson("Bob", "Jones", "Programmer I"));

// function declaration
/*
; Params: name: string, priority: string, person: {id: number, firstName: string, lastName: string, jobTitle: string}
; Response: {id: number, name: string, dateCreated: Date, priority: string, person: {id: number, firstName: string, lastName: string, jobTitle: string}}.
; Description: Function to create a ticket for a person.
*/
function createTicket (name, priority, person){
  // Using control statements validate the input to the function and throw an error if necessary to warn the user of missing data.
  if(name == null
    || name == undefined
    || name === ""){
      throw Error("A valid name is required to create a ticket.")
  }
  // Using control statements validate the input to the function and throw an error if necessary to warn the user of missing data.
  if(priority == null
    || priority == undefined
    || priority === ""){
      throw Error("A valid priority is required to create a ticket.")
  }
  // Using control statements validate the input to the function and throw an error if necessary to warn the user of missing data.
  if(person == null
    || person == undefined){
      throw Error("A valid person is required to create a ticket.")
  }

  // Declare a variable and initialize to a new ticket object, setting the id to the current ticket seed value and and dateCreate to the current date and time.
  var ticket = {
    id: ticketIdSeedValue,
    name,
    dateCreated: new Date(),
    priority,
    person
  }

  // increment the seed value for tickets so that the id is unique
  ticketIdSeedValue ++;

  // Return the fully populated ticket object.
  return ticket;
}
/*
; Params: firstName: string, lastName: string, jobTitle: string
; Response: {id: number, firstName: string, lastName: string, jobTitle: string}.
; Description: Function to create a person for use on a ticket.
*/
function createPerson(firstName, lastName, jobTitle){
  // Using control statements validate the input to the function and throw an error if necessary to warn the user of missing data.
  if(firstName == null
    || firstName == undefined
    || firstName === ""){
      throw Error("A valid first name is required to create a person.")
  }

  // Using control statements validate the input to the function and throw an error if necessary to warn the user of missing data.
  if(lastName == null
    || lastName == undefined
    || lastName === ""){
      throw Error("A valid last name is required to create a person.")
  }

  // Using control statements validate the input to the function and throw an error if necessary to warn the user of missing data.
  if(jobTitle == null
    || jobTitle == undefined
    || jobTitle === ""){
      throw Error("A valid job title is required to create a person.")
  }

  // Declare a variable and initialize to a new person object, setting the id to the current person seed value.
  var person = {
    id: personIdSeedValue,
    firstName,
    lastName,
    jobTitle
  };

  // increment the seed value for person so that the id is unique
  personIdSeedValue ++;

  // Return the fully populated person object.
  return person;
}

/*
; Params: {id: number, name: string, dateCreated: Date, priority: string, person: {id: number, firstName: string, lastName: string, jobTitle: string}}
; Response: undefined.
; Description: Function to write the ticket information out to the console.
*/
function printLn (ticket){
  // Call the console.log function to output the property values of the ticket
  console.log(`Ticket ${ticket.id} was created on ${ticket.dateCreated.toLocaleDateString("en-US")} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle})`);
}

// Call the console.log function to output a formatting line.
console.log("");
// Call the printLn function passing the ticket to print information about to the console.
printLn(helpDeskTicket)

// end program
