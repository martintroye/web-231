/*
============================================
; Title: Values and Variables
; Author: Troy Martin
; Date: 02/06/2019
; Modified By: Troy Martin
; Description: Create a simple JavaScript program using values and variables with at least two errors. 
; The program should not execute and there should be at least two errors in the code.
;===========================================
*/

// start program

/*
; Expected output:
; Calculate and display the total cost of training based on the cost per hour, number of hours and the number of users
*/

// variable declaration and assignment goes here...
costPerHour;
var numberOfHours;
var numberOfUsers;

costPerHour = 250.25;
numberOfHours = 10;
numberOfUsers = 5;

// calculate the total cost of training
var  totalCost = numberOfUsers
numberOfHours * costPerHour; 

// output
console.lo("Total cost: " + totalCost);

// end program