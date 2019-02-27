/*
============================================
; Title: Discussion 4.1
; Author: Troy Martin
; Date: 02/26/2019
; Modified By: Troy Martin
; Description: Discussion 4.1, JavaScript program using an array with at least two errors
;===========================================
*/
// start program
// Require statement that imports the martin-header.js file from my root directory.
const header = require("../martin-header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Discussion 4.1"), "\n");

/*
; Expected output:
; Add 10 values to the queue array, output the value and the length of the queue array.
; Process the queue array moving the values to the processedArray and outputting the value and the length of the queue array.
;
; Item x has been queued, there are n items in the queue. (10 times)
; Item x has been processed, there are n items remaining the queue. (10 times)
; 0 items in the queue.
; 10 items have been processed.
*/

// variable declaration and assignment goes here...
// Constant holding the length of the array.
const queueLength = 10;
// Constant holding the seed value for the number to be processed.
const itemIdSeed = 100;
// Array variable holding the values to process.
var queue = new Array(10);
// Array variable holding the values that have been processed.
var processedValues = [];


// output

// Using a for loop add set of values to the queue array based on the seed value.
for(var i = itemIdSeed; i < (itemIdSeed + queueLength); i++){
  // Using the Array.push function add the value to the end of the queue array and get the new length.
  var len = queue.push(i);

  // Call the console.log function to output the value and the new length of the array.
  console.log(`Item ${i} has been queued, there are ${len} items in the queue.`)
}

// Call the console.log function to output a new line for formatting.
console.log("\n")

// While loop to process the queue array until length is undefined.
while(queue.length){
  // Call the Array.shift function to get the value of the first item of the array and remove it.
  var item = queue.shift();

  // Call the Array.push function to add the value to the processed array.
  processedValues.push(item);

  // Call the console.log function to output the value that was processed and the new length of the queue array.
  console.log(`Item ${item} has been processed, there are ${queue.length} items remaining the queue.`)
}

// Call the console.log function to output a new line for formatting
console.log("\n")

// if all the values in the queue have not been processed throw an error
if(queue.length !== 0){
  // Throw an error displaying how many items have not been processed.
  throw Error(`There are ${queue.length} items remaining in the queue`);
}

// Call the console.log function to output the length of the queue array.
console.log(`${queue.length} items in the queue.`);
// Call the console.log function to output the length of the processed values array.
console.log(`${processedValues.length} items have been processed.`);


// end program
