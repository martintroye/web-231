/*
============================================
; Title: Discussion 5.1
; Author: Troy Martin
; Date: 03/05/2019
; Modified By: Troy Martin
; Description: Discussion 5.1 Advanced Arrays, program with a keyed collection array that has at least two errors.
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");

/*
; Expected output:
; Output the original array of tractors to the console.
; Sort the array of tractor objects by price in ascending order and output to the console.
; Sort the array of tractor objects by price in descending order and output to the console.
*/

// variable declaration and assignment
// the default sort order for the program, true sort ascending, false sort descending.
var isAscendingOrder = true;

// the array of tractor objects.
var tractors =
  {
    make: "John Deere",
    model: "9470RX",
    year: 2017,
    price: 554549
  },
  {
    make: "Claas",
    model: "XERION 3800 TRAC",
    year: 2017,
    price: 142728
  },
  {
    make: "CaseIH",
    model: "Steiger 620",
    year: 2017,
    price: 468459
  },
  {
    make: "John Deere",
    model: "9520RT",
    year: 2018,
    price: 474895
  },
  {
    make: "CaseIH",
    model: "Puma 240",
    year: 2019,
    price: 216959
  },
  {
    make: "Claas",
    model: "XERION 5000 TRAC",
    year: 2018,
    price: 364320
  }
];


// function declaration

/*
; Params: argA, argB
; Response: 0 equal, index unchanged / positive number, move index down / negative number, move index up.
; Description: Function to evaluate the price property of argA and argB and return the sort value.
*/
function sortByPrice (argA, argB){
  // If statement to compare the prices based on the current sort order of the program.
  // If sorting ascending subtract B from A to get sort value otherwise subtract A from B.
  // this will give you the 0 for equal, the positive or negative value required to sort the array.
  return isAscendingOrder === true ? argA_price - argB.price : argB_price - argA.price;
}

/*
; Params: tractor
; Response: undefined
; Description: Function to output the year, make, model and price of the tractor parameter.
*/
function printLn(tractor){
  // Call the console.log() function and output the year, make, model and price of the tractor.
  console.log(`${tractor,year} ${tractor.make}, ${tractor.model}, $${tractor.price}`);
}

// output
// Call the console.log() function and output a well-formatted header with a line feed.
console.log(header.display("Troy", "Martin", "Discussion 5.1"), "\n");

// Call the console.log function and describe the output that will follow.
console.log("-- Original list of tractors --")
// Use the Array forEach method to loop the original list of tractors and call the printLn function to output the values.
tractors.forEach(printLn);

// Use the Array sort method to sort the list of tractors by price, ascending order, call the sortByPrice function to sort the array.
tractors.sort(sortByPrice);

// Call the console.log function and describe the output that will follow.
console.log("")
console.log("-- List of tractors sorted by price, ascending order --")
// Use the Array forEach method to loop the sorted list of tractors and call the printLn function to output the values.
tractors.forEach(printLn);

// Change the sort direction to descending by setting the global variable for sort direction to false.
isAscendingOrder = false;
// Use the Array sort method to sort the list of tractors by price, descending order, call the sortByPrice function to sort the array.
tractors.sort(sortByPrice);

// Call the console.log function and describe the output that will follow.
console.log("")
console.log("-- List of tractors sorted by price, descending order --")
// Use the Array forEach method to loop the list of sorted tractors and call the printLn function to output the values
tractors.forEach(printLn);

// end program
