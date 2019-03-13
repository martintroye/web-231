/*
============================================
; Title: Discussion 6.1
; Author: Troy Martin
; Date: 03/12/2019
; Modified By: Troy Martin
; Description: Discussion 6.1, Objects and Built-In Objects
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Discussion 6.1"), "\n");

/*
; Expected output:
; Create an array of scale tickets
; Loop the scale tickets and output the properties to the console.
*/

// variable declaration and assignment

// Declare an array variable to hold a collection of scale tickets
var scaleTickets = [];

// function declaration

/*
; Params: id: number, weight: number, moisture: number, createdOn: Date
; Response: {id: number, weight: number, moisture: number, createdOn: Date}.
; Description: Function to create a scale ticket object using random data.
*/
function createScaleTicket (id, weight, moisture, createdOn){
  // Create and return a new object using the parameters provided
  return id, weight, moisture, createdOn;
}

/*
; Params: {id: number, weight: number, moisture: number, createdOn: Date}
; Response: undefined.
; Description: Function to write the scale ticket information out to the console.
*/
function printLn (scaleTicket){
  // Call the console.log function to output the property values of the scaleTicket
  console.log(`Id: ${scaleTicket[id]} Weight: ${scaleTicket.weight} Moisture: ${scaleTicket.moisture} Date: ${scaleTicket['createdOn'].toLocaleDateString("en-US")}`);
}

/*
; Params: none
; Response: number
; Description: Function to create a random weight between 0 and 60000.
*/
function getRandomWeight(){
  // Average 1,000 bu truck load weighs 60000lbs generate a random weight
  return Math.floor(Math.random() * 60000);
}

/*
; Params: none
; Response: number
; Description: Function to create a random number between .1 and .25 rounded to 2 decimal places.
*/
function getRandomMoisture(){
  // Create a random number between .1 and .25 and round to 2 decimal places
  return (Math.random() * (.25 - .1) + .1).toFixed(2);
}

/*
; Params: none
; Response: number.
; Description: Function to create a random number between 1 and 30.
*/
function getRandomDayOfMonth(){
  // Create a random number between 1 and 30
  return Math.floor(Math.random() * 30) + 1;
}

// Using a for loop create 10 scale tickets with random data
for(var i = 1; i <= 10; i++){
  // Call the Array push method to add a new scale ticket created with random data
  scaleTickets.push(createScaleTicket(i, getRandomWeight(), getRandomMoisture(), new Date(2018, 8, getRandomDayOfMonth())))
}

// output
console.log("")
console.log("--- Scale Tickets ---")
scaleTickets.forEach(printLn)

// end program
