/*
============================================
; Title: Exercise 5.3
; Author: Troy Martin
; Date: 03/05/2019
; Modified By: Troy Martin
; Description: Exercise 5.3 Object Collections, loop and output list of array-like objects.
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");

/*
; Expected output:
; Troy Martin
; Exercise 5.3
; Today's Date
;
; -- COMPOSERS --
; Last Name: Banks, Genre: Jazz, Rating: 8
; Last Name: Dunkley, Genre: Film Score, Rating: 5
; Last Name: Baca, Genre: Video Games, Rating: 10
; Last Name: Glass, Genre: Classical, Rating: 2
; Last Name: Debussy, Genre: Classical, Rating: 1
*/

// variable declaration and assignment
// an array of composer objects
var composers = [
  {
    firstName: "Louis",
    lastName: "Banks",
    genre: "Jazz",
    rating: 8,
  },
  {
    firstName: "Matt",
    lastName: "Dunkley",
    genre: "Film Score",
    rating: 5,
  },
  {
    firstName: "Steve",
    lastName: "Baca",
    genre: "Video Games",
    rating: 10,
  },
  {
    firstName: "Phillip",
    lastName: "Glass",
    genre: "Classical",
    rating: 2,
  },
  {
    firstName: "Claude",
    lastName: "Debussy",
    genre: "Classical",
    rating: 1,
  },
];

// function declaration

/*
; Params: {firstName: string, lastName: string, genre: string, rating: number}
; Response: undefined
; Description: Function to output the last name, genre and rating for the composer.
*/
function printLn(composer){
  // Call the console.log() function and output the composers last name, genre and rating.
  console.log(`Last Name: ${composer.lastName}, Genre: ${composer.genre}, Rating: ${composer.rating}`);
}

// output
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 5.3"), "\n");

// Call the console.log function and describe the output that will follow.
console.log("-- COMPOSERS --");
// Use the Array forEach method to loop the array, use the printLn function as the predicate to output the array item to the console.
composers.forEach(printLn);

// end program
