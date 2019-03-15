/*
=============================================
; Title: donner-discussion-6.1
; Author: Adam Donner
; Date: 13 March 2019
; Modified by:
; Description: Creates a program using object
; properties with two (2) errors.
;============================================
*/


/*
Expected output:
  Adam Donner
  Discussion 6.1
  Todays Date

  My Favorite movies are the original Star Wars Trilogy
  I have listed two of my favorite quotes from the best characters in the Star Wars universe

  -- My favorite Darth Vader quote --
  Luke I am your Father

  -- My favorite Yoda quote --
  When 900 years old you reach, look as good you will not.
*/


// start program

const header = require('../header.js');  // Calls the well formatted header.
console.log(header.display("Adam", "Donner", "Discussion 6.1"));  // This assigns values to the donner-header.js file and outputs it to the console.log.
console.log("") // Line break

//This creates an object literal.

// martin remove var from object property definition
var starWars = {
  vaderSays: {
    son: "Luke",
    relationship: "Father"
  },
  yodaSays: {
    age: "900",
    stretch: "reach",
    who: "you"
  }
};


// This seals the starWars.varderSays object.
// martin - Commented out the sealing of the starWars.vaderSays object so that .who can be added
//Object.seal(starWars.vaderSays);
// This adds a value a new property to the vaderSays object
// martin Closed the quote on the value for vaderSays.who.
starWars.vaderSays.who = "I";


// Outputs objects above into a well formatted sentence.
console.log("My Favorite movies are the original Star Wars Trilogy\n" + "I have listed two of my favorite quotes from the best characters in the Star Wars universe");
console.log(""); // Line break
console.log("-- My favorite Darth Vader quote --");
// This outputs a Darth Vader quote.
console.log(starWars.vaderSays.son + " " + starWars.vaderSays.who + " am your " + starWars.vaderSays.relationship);
console.log(""); // Line break
console.log ("-- My favorite Yoda quote --");
// This outputs a Yoda quote.
// martin corrected the casing of yodaSays on the second yodaSays.who
console.log('When ' + starWars.yodaSays.age + " years old " + starWars.yodaSays.who + " reach, look as good " + starWars.yodaSays.who + " will not.");

// end program
