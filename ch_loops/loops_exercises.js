// ex 1: modified age.js (from ch_variables)

let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));

for (let x = 10; x <= 40; x += 10) {
  console.log(`In ${x} years, you will be ${age + x} years old.`);
}

// ex 2: factorial with for loop

function factorial(num) {
  let result = 1;
  for (counter = num; counter >= 1; counter -= 1) {
    result *= counter;
  }
  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4))
console.log(factorial(5));
console.log(factorial(6));

// ex 3

// let counter = 0;

// while (counter = 1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }
console.log('EX 3: the code causes an infinite loop bc \
the while loop stopping condition reassigns the value of \
counter as 1, so the condition is never false and cannot \
break because it never gets above 2 either.')

// ex 4:

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

console.log ('\nEX 4: the code will have an callstack max error bc there is \
no increment to increase the value of i so that it becomes \
greater than 5. it should log "1" continuously to the console. ');
console.log('\nEX 4: CORRECTION - the code does not have an error. The \
console.log call argument reassigns the value of i and increments it so that\
it does become greater than 5.');

// ex 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  console.log(result);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// refactored

let result1 = -1;
let tries1 = 0
for (tries1; result1 <= 2; tries1 += 1) {
  result1 = randomNumberBetween(1, 6);
  console.log(result1);
}

console.log('REFACTORED ATTEMPT: It took ' + String(tries1) + '\
 tries to get a number greater than 2')

 // ex 6: factorial recursion

 function factorialR(num) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

  


 }


//  function factorial(num) {
//   let result = 1;
//   for (counter = num; counter >= 1; counter -= 1) {
//     result *= counter;
//   }
//   return result;