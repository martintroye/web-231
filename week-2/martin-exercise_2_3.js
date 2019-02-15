/*
============================================
; Title: Exercise 2.3
; Author: Troy Martin
; Date: 02/14/2019
; Modified By: Troy Martin
; Description: Defining a property for a function instead of a global variable.
;===========================================
*/
// start program

/*
; Expected output:
; Create a function called myName with 0 parameters and an empty body (curly braces).
; Create a function property and name it the functions name dot your actual name (if your name is Bob name the property myName.bob.  If your name is Jerry, name the property myName.jerry.  I don't want to see property names like actualName, me, etc.).
; Return the function property created in the above step from the myName() function body: { return myName.bob }
; Your dot name will be your actual name (see step two).
; Use the console.log function and pass-in the myName() function (console.log(myName()).
*/

// function property declaration
myName.greeting = "Hello"
myName.troy = "Troy";
myName.martin = "Martin";

// Define the function that will be used to output the function properties.
function myName(){
  // Use JavaScript string interpolation feature to concatenate the function properties into a single string.
  return `${myName.greeting} ${myName.troy} ${myName.martin}!`;
}

// Output a line break to the console for additional formatting.
console.log("\n");
// Output the return value of the myName function.
console.log(myName());

// end program
