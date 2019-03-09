/*
=============================================
; Title: baumann-discussion-5.1.js
; Author: Reva Baumann
; Date: 05 March 2019
; Modified by: Reva Baumann
; Description: Creates a program using keyed
; collection array with two (2) errors.
;============================================
*/


// start program

/*
Expected output:
  Reva Baumann
  Discussion Board 5.1
  07 March 2019
  Displays a list of superheros real names: Wonder Woman, Batman, Superman, Green Lantern, The Flash

*/

// lists details of formatted header, including first name, last name and assignment
const header = require('../header.js');
console.log(header.display("Reva", "Baumann", "Discussion 5.1"));

// collection of objects listed under firstName lastName of Justice League Members
const justiceLeague = [
    {
        firstName: 'Diana',
        lastName: 'Prince'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne'
    },
    {
        firstName: 'Clark',
        // martin - Added comma to separate the properties in the object.
        lastName: 'Kent'
    },
    {
        firstName: 'Hal',
        lastName: 'Jordan'
    },
    {
        firstName: 'Barry',
        lastName: 'Allen'
    }
];

// output
console.log ('-- DISPLAYING A LIST OF SUPERHEROES --')
let index = 1
justiceLeague.forEach ( (justiceLeague) => {
    console.log(index + '. ' + justiceLeague.firstName + ' ' + justiceLeague.lastName)
    // martin - When incrementing the index value the proper syntax is ++.
    index++
})

//endprogram
