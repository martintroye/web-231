/*
============================================
; Title: donner-assignment-3.1.js
; Author: Adam Donner
; Date: 18 February 2019
; Description: Demonstrates the usage of if
; and else if statements.
;===========================================
*/

// start program

/*
    Expected Output:
    Batman is The Dark Knight!
*/


var batMan = "The Dark Knight";  // Variable that declares creates and declares and assigns a value to batMan.

if (batMan === "The Man Of Steel"){  // If statement checking value of batMan against a string value.   If the result is false move to next else if.
  console.log("Batman is " + batMan + "!")  // If the result is true output to console.log.
}
else if (batMan === "Your Friendly Neighborhood Spiderman"){  // Else if statement checking value of batMan against a string value.  If the result is false move to next else if.
  // martin - Fix the unterminated string literal by changing the apostrophe a quote.
  console.log("Batman is " + batMan + "!")  // If the result is true output to console.log.
}
else if (batMan === "The Dark Knight"){  // Else if statement checking value of batMan against a string value.  If the result is false move to next else if.
  console.log("Batman is " + batMan + "!")  // If the result is true output to console.log.
}
else {  // If all values are false output to the console.log.
  // martin - Removed an extra plus used to concatenate the string at the end of the statement.
  // not an error but I did add a semi-colon to terminate the statement
  console.log("Sorry I dont know " + batMan);
}

// end program
