// import library
let rlSync = require('readline-sync');

// ask for 2 numbers
let numberOne = rlSync.question('Please enter one number:\n');
let numberTwo = rlSync.question('Please enter a second number:\n');

// log sum of 2 numbers
console.log(`${numberOne} + ${numberTwo} = ${parseInt(numberOne) + parseInt(numberTwo)}`);

// * Can also use "Number" function on value declaration of numberOne and numberTwo to convert input
// to a number type 
