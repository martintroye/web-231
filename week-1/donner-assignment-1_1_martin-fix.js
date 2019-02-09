/*
============================================
; Title: donner-assignment-1.1.js
; Author: Adam Donner
; Date: 7 February 2019
; Description: This program demonstrates the
; use of JavaScript values and variables in
; the of an application
;===========================================
*/ 

// start program

/*
    Expected Output:

    Addition of Numbers
    Subtraction of Numbers
    Multiplication of Numbers
    Division of Numbers
*/

// Variable declaration and assignments along with the math for the application:
// martin - Added the missing equal sign needed to assign the value to the variable
const number1 = 6; 
const number2 = 3;
const addition = number1 + number2;
const subtraction = number1-number2;
const multiplication = number1*number2;
const division = number1/number2;

// output
// martin - the new line included before multiplication is output has a backslah instead of a forward slash causing the lines to run together
console.log ('\n','6 + 3 = ' + addition, '\n','6 - 3 = ' + subtraction, '\n','6 * 3 = ' + multiplication, '\n','6 / 3 = ' + division)

// end program