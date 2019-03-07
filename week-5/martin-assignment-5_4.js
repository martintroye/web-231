/*
============================================
; Title: Assignment 5.4
; Author: Troy Martin
; Date: 03/05/2019
; Modified By: Troy Martin
; Description: Assignment 5.4 Filtering/Reducing complex data structures, using the map function reduce an array-like object.
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");

/*
; Expected output:
; Troy Martin
; Assignment 5.4
; Today's Date
;
; -- COMPOSER BY RATING --
; Rating: 8
; Composer: Banks
;
; Rating: 5
; Composer: Dunkley
;
; Rating: 10
; Composer: Baca
;
; Rating: 2
; Composer: Glass
;
; Rating: 1
; Composer: Debussy
;
; -- COMPOSER BY GENRE --
; Genre: Jazz
; Composer: Banks
;
; Genre: Film Score
; Composer: Dunkley
;
; Genre: Video Games
; Composer: Baca
;
; Genre: Classical
; Composer: Glass
;
; Genre: Classical
; Composer: Debussy
;
*/

// variable declaration and assignment
// array of composers last name and rating only, initialized to an empty array.
var composersByRating = [];
// array of composers last name and genre only, initialized to an empty array.
var composersByGenre = [];

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
; Response: {rating: number, composer: string}
; Description: Function reduce the composer to a last name and rating.
*/
function getRating(composer){
  // Reduce the composer to the rating and last name.
  return {rating: composer.rating, composer: composer.lastName};
}

/*
; Params: {firstName: string, lastName: string, genre: string, rating: number}
; Response: {genre: string, composer: string}
; Description: Function reduce the composer to a last name and genre.
*/
function getGenre(composer){
  // Reduce the composer to the genre and last name.
  return {genre: composer.genre, composer: composer.lastName};
}

// Using the Array map function reduce the original composers to the rating and last name by calling the getRating predicate function.
composersByRating = composers.map(getRating);

// Using the Array map function reduce the original composers to the genre and last name by calling the getGenre predicate function.
composersByGenre = composers.map(getGenre);

// output
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Assignment 5.4"), "\n");

// Call the console.log function and describe the output that will follow.
console.log("-- COMPOSER BY RATING --")
// Using the Array forEach function loop the array and output the values to the console.
composersByRating.forEach(function(value){
  // Call the console.log function to output the rating and the composer name
  console.log(`Rating: ${value.rating}\nComposer: ${value.composer}`,"\n");
})

// Call the console.log function and describe the output that will follow.
console.log("-- COMPOSER BY GENRE --")
// Using the Array forEach function loop the array and output the values to the console.
composersByGenre.forEach(function(value){
  // Call the console.log function to output the rating and the composer name
  console.log(`Genre: ${value.genre}\nComposer: ${value.composer}`,"\n");
})
// end program
