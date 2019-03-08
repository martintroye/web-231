/*
============================================
; Title: Discussion-board-5.1.js
; Author: Lance Desrouleaux
; Date: 4th March 2019
; Description: A program to demonstrate the Map key Array
;===========================================
*/

// Declare a formatted Header
const header = require('../header.js')
console.log(header.display("Lance", "Desrouleaux", "Discussion 5.1"));
console.log('');


//star program

//Here I Declare a new Map
var users = new Map();

//Add a few keyed ovjects to the map
users.set('Jack', 'USA');
users.set( 'Maria', 'Germany');
// martin Thailand was not declared as a variable, added apostrophes to turn it into a string literal.
users.set('Bruce', 'Thailand');
users.set('Timothy', 'Russia');


//Here I iterate through Map and print each key and value to screen
// martin - The of set is a function on the Map. The map is declared with the name users
for (var [key, value] of users) {
  console.log(key + ' lives in ' + value + '.');
}

console.log('');
console.log('Bruce is ready for some change ---->>>>>')
// martin - The function consolelog does not exist. Added period to call the console.log function
console.log('');


//Here I removed the old key and value for Bruce and then add in a new one for Bruce
// martin - Technically this is not a bug so I did not change it, no key set to Lee in the map so delete does not do anything.
users.delete('Lee');
// martin - The set function call here is changing the value for the key Bruce to Switzerland.
users.set('Bruce', 'Switzerland');
for (var [key, value] of users) {
  console.log(key + ' lives in ' + value+ '.');
}

//End Program

