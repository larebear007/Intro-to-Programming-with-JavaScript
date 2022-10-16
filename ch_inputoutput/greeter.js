// import library
let rlSync = require('readline-sync');


// greeting
let firstName = rlSync.question('What\s your first name?\n');
let lastName = rlSync.question('What\'s your last name?\n');
console.log(`Hello, ${firstName} ${lastName}!`);

// updated: function

let firstNameFunc = () => {
  input = rlSync.question('What\s your first name?\n');
  return input;
}

let lastNameFunc = () => {
  input = rlSync.question('What\'s your last name?\n');
  return input;
}

console.log(`Hello, ${firstNameFunc()} ${lastNameFunc()}!`);