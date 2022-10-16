// ex 1

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
let answerOne = 'bar retains the value of 1 when logged to the console bc the foo function declares a new \n \
variable called bar that is not related to the one on the global scope. \n \
Essentially there are two different bars, one on the global main scope and one in the foo function.';
console.log(answerOne);

// ex 3

let multiply = () => {
  let rls = require('readline-sync');
  let numOne = rls.question('Enter a number: ');
  let numTwo = rls.question('Enter a second number: ');
  console.log(`${numOne} * ${numTwo} = ${numOne * numTwo}`);
}

multiply();

// ex 4

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

let answerFour = 'The function has a return line that does not specify what to return. The console.log \
code underneath may not be reachable. \n Maybe the function doesn\'t return anything.';
console.log(answerFour);

// ex 5

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

let answerFive = 'The following function should return the word Yipeee!!!!, however it won\'t be logged anywhere.'
console.log(answerFive);