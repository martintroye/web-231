/*
============================================
; Title: Assignment 2.4
; Author: Troy Martin
; Date: 02/16/2019
; Modified By: Troy Martin
; Description: Understanding how to build and invoke functions.
;===========================================
*/
// start program

/*
;Create a function called fullName with two parameters (first and last name) and a return the two parameters as one string.
;Create a function called dateWriter with three parameters (year, month, and day) and return a new date using the passed-in values.
;Create a function called formatNumber with two parameters (number and numOfFixedPositions) and return the number with the number of fixed positions you specified in the second parameter.
;Create a function called convertToInt with one string parameter.  Parse the string parameter and return the value as an integer.
;Create a function called convertToFloat with one string parameter.  Parse the string parameter and return the value as a float.
;Test each of these functions by calling them, passing in test values (yes this means you will need to create test variables), and outputting the results to the console window (yes, this means use the console.log() function to output the results)

; Expected output:

; FirstName LastName
; Assignment 2.4
; Today's Date

; Hello my name is <your actual name goes here>!
; Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.
; I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.
*/

// function definitions

// fullName evaluates and then combines the first and last name parameters to provide a full name.
function fullName(firstName, lastName){
  //using ternary if statements to determine if the first and last name parameters were supplied and are
  // not null and return an empty string if needed.
  firstName = firstName !== undefined && firstName !== null ? firstName : "";
  lastName = lastName !== undefined && lastName !== null ? lastName : "";

  // using string interpolation to concatenate the first and last name to a single string.
  // trim the final value to remove any leading or trailing spaces. extra spaces can occur if parameters are omitted.
  return `${firstName} ${lastName}`.trim();
}

// dataWriter returns a JavaScript date object based on the year, month and day provided.
// The year month and day are required. Note that month is a zero based value.
// if the year month and day are not valid will return undefined
function dateWriter(year, month, day){
  // validate that all three parameters were provided and that all three are valid numbers
  // not handling valid number values for year, month and day
  if(isNaN(year) === true
    || isNaN(month) === true
    || isNaN(day) == true){
    return; // return undefined, could throw an Error
  }

  // create the new date using the year month and day parameters
  return new Date(year, month, day);
}

// formatNumber returns the number with the number of fixed positions you specified in the second parameter.
// if there is a validation error returns 0
function formatNumber(number, numOfFixedPositions){
  // validate that both number and number of fixed positions are numbers
  // JavaScript isNan will handle undefined parameters
  if(number === null
    || numOfFixedPositions === null
    || isNaN(number) === true
    || isNaN(numOfFixedPositions) === true){
    return 0; // return 0, could throw an Error
  }

  // return the number set to the number of decimal precision defined
  return number.toFixed(numOfFixedPositions);
}

// convertToInt returns the supplied value as an integer if it is a valid number otherwise return 0
function convertToInt(value){
  // validate that the value is defined, not null and is a number otherwise return 0
  // JavaScript isNan will handle undefined parameters
  if(value === null
    || isNaN(value) === true){
    return 0; // return 0, could throw an Error
  }

  // Convert the value to an integer and return the value
  return  parseInt(value);
}

// convertToFloat returns the supplied value as a float it is a valid number otherwise return 0
function convertToFloat(value){
  // validate that the value is defined, not null and is a number otherwise return 0
  // JavaScript isNan will handle undefined parameters
  if(value === null
    || isNaN(value) === true){
    return 0; // return 0, could throw an Error
  }

  // Convert the value to a float and return the value
  return  parseFloat(value);
}

// variable declaration and assignment goes here...

// Expected output variables
fullName.firstName = "Troy";
fullName.lastName = "Martin";

dateWriter.year = 2019;
// JavaScript month is 0 based so Feb = 1
dateWriter.month = 1;
dateWriter.day = 16;

// We are formatting the temp to a single decimal position
formatNumber.currentTemp = 11.1234;
formatNumber.numberOfPositions = 1;

// Convert the age to an integer will drop decimal
convertToInt.myAge = "50.66";

// Convert string to float with decimal places to show float
convertToFloat.mySavingsGoal = "100000.99";

// Test variables

/*
; formatNumber variables
; .nan = Value that is not a number.
; .pi = The value of PI.
; .piPlaces = Number of decimal places to display.
*/
formatNumber.nan = "A";
formatNumber.pi = 3.14159265359;
formatNumber.piPlaces = 4;

/*
; dateWriter variables
; .nan = Value that is not a number.
*/
dateWriter.nan = "A";

/*
; convertToInt variables
; .stringValue = A number represented as a string.
; .nanValue = A string value that is not a number.
; .floatValue = A floating point number.
; .integerValue = A number that is already an integer.
*/
convertToInt.stringValue = "123";
convertToInt.nanValue = "Troy";
convertToInt.floatValue = 10.5;
convertToInt.integerValue = 100;

/*
; convertToFloat variables
; .stringValue = A number represented as a string.
; .nanValue = A string value that is not a number.
; .floatValue = A floating point number.
; .integerValue = A number that is already an integer.
*/
convertToFloat.stringValue = "123.04";
convertToFloat.nanValue = "Troy";
convertToFloat.floatValue = 10.59;
convertToFloat.integerValue = 100;


// Tests
/*
; fullName tests
; first and last name combined
; only supply the first name (one parameter)
; null and last name supplied
; no parameters
*/
console.log("\nfullName tests");
console.log("first and last combined:", fullName(fullName.firstName, fullName.lastName));
console.log("Only one parameter:", fullName(fullName.firstName));
console.log("null and last:", fullName(null, fullName.lastName));
console.log("no parameters:", fullName());

/*
; dateWriter tests
; no parameters, function returns undefined
; missing parameters, function returns undefined
; invalid parameters, function returns undefined
; valid date
*/
console.log("\ndateWriter tests");
console.log("no parameters:", dateWriter());
console.log("missing parameters:", dateWriter(dateWriter.year));
console.log("invalid parameters:", dateWriter(dateWriter.year, dateWriter.month, dateWriter.nan));
// format the valid date using the en-us (English US) date format
console.log("valid:", dateWriter(dateWriter.year, dateWriter.month, dateWriter.day).toLocaleDateString("en-us"));

/*
; formatNumber tests
; neither parameter supplied returns 0
; no value, fixed positions set returns 0
; values not a number returns 0
; value, no fixed positions returns 0
; value with fixed positions returns number with proper number of decimal places
*/
console.log("\nformatNumber tests");
console.log("neither parameter supplied:", formatNumber());
console.log("undefined number:", formatNumber(undefined, formatNumber.piPlaces));
console.log("null number:", formatNumber(null, formatNumber.piPlaces));
console.log("undefined number of positions:", formatNumber(formatNumber.pi, undefined));
console.log("null number of positions:", formatNumber(formatNumber.pi, null));
console.log("values not a number:", formatNumber(formatNumber.nan, formatNumber.piPlaces));
console.log("number of positions not a number:", formatNumber(formatNumber.pi, formatNumber.nan));
console.log("value with fixed positions:", formatNumber(formatNumber.pi, formatNumber.piPlaces));

/*
; convertToInt tests
; Omit the parameter, function returns a 0.
; Pass a null, function returns a 0.
; Pass a number as a string, function returns the number as an integer.
; Pass a string that is not a number, function returns 0.
; Pass a floating point number, function returns an integer.
; Pass an integer, function returns the same integer.
*/
console.log("\nconvertToInt tests");
console.log("undefined", convertToInt());
console.log("null", convertToInt(null));
console.log("string", convertToInt(convertToInt.stringValue));
console.log("nan", convertToInt(convertToInt.nanValue));
console.log("float", convertToInt(convertToInt.floatValue));
console.log("integer", convertToInt(convertToInt.integerValue));

/*
; convertToFloat tests
; Omit the parameter, function returns a 0.
; Pass a null, function returns a 0.
; Pass a number as a string, function returns the number as an integer.
; Pass a string that is not a number, function returns 0.
; Pass a floating point number, function returns an integer.
; Pass an integer, function returns the same integer.
*/
console.log("\nconvertToFloat tests");
console.log("undefined", convertToFloat());
console.log("null", convertToFloat(null));
console.log("string", convertToFloat(convertToFloat.stringValue));
console.log("nan", convertToFloat(convertToFloat.nanValue));
console.log("float", convertToFloat(convertToFloat.floatValue));
console.log("integer", convertToFloat(convertToFloat.integerValue));


// output specified in the starter code for the assignment
console.log("\n");
// Output my full name, the assignment and the date
console.log(fullName(fullName.firstName, fullName.lastName));
console.log("Assignment 2.4");
// format the date using en-us the (English US) date format
console.log(dateWriter(dateWriter.year, dateWriter.month, dateWriter.day).toLocaleDateString("en-us"));

// using string interpolation to display the function results as part of a static string
console.log(`Hello my name is ${fullName(fullName.firstName, fullName.lastName)}!`);
// using string interpolation to display the function results as part of a static string
// format the date using en-us the (English US) date format
console.log(`Today's date is ${dateWriter(dateWriter.year, dateWriter.month, dateWriter.day).toLocaleDateString("en-us")} and the current temperature is ${formatNumber(formatNumber.currentTemp, formatNumber.numberOfPositions)} degrees.`);
// using string interpolation to display the function results as part of a static string
console.log(`I am ${convertToInt(convertToInt.myAge)} years old and my savings account goal is ${convertToFloat("100000.99")} dollars.`);


// end program



