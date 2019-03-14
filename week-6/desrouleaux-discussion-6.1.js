/*
============================================
; Title: Discussion-board-6.1.js
; Author: Lance Desrouleaux
; Date: 13th March 2019
; Description: A program that demonstrates Objects by creating a property management object with properties of different renters
;===========================================
*/

// Declare a formatted Header
const header = require('../header.js')
console.log(header.display("Lance", "Desrouleaux", "Discussion 6.1"));
console.log('');

//start program


//Here I create an Object to store renter information.
var propertyManagement = {

renters:
{
  'Renter One':
  {
    firstName: 'Deborah' ,
    lastName: 'Cross',
    social: 089884637,
    "unit number": 5049,
  }
  // martin - Added a comma between the properties of the object to correct the syntax.
  ,
  'Renter Two':
  {
    firstName: 'Billy',
    lastName: 'Idol',
    social: 071112221,
    'unit number': 7789
  }


}


}



console.log(" Current Renters ");

//Here I run a for..in loop to print out the renters.
  for( renty in propertyManagement.renters){
  // martin - In order to access the unit number property added the missing close bracket on the indexer for the renters array.
  console.log(`${renty}: ${propertyManagement.renters[renty].firstName} ${propertyManagement.renters[renty].lastName} Unit Number: ${propertyManagement.renters[renty]['unit number']}` );
  }

//end program
