// ex 1

function log(textOne, textTwo) {
  console.log(textTwo + ':   ' + textOne);
}

log('(false || (true && false))', 'FASLE');
log('true || (1 + 2)', 'TRUE');
log('(1 + 2) || true', '3');
log('true && (1 + 2)', '3');
log('false && (1 + 2)', 'FALSE');
log('(1 + 2) && true', 'TRUE');
log('(32 * 4) >= 129', 'FALSE');
log('false !== !true', 'FALSE');
log('true === 4', 'FALSE');
log('false === (847 === \'847\')', 'TRUE');
log('false === (847 == \'847\')', 'FALSE');
log('(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false\n\n', 'TRUE');

// ex 2

let evenOrOdd = (int) => {
  parseInt(int);
  return (int % 2 === 0) ? console.log('EVEN') : console.log('ODD');
}

evenOrOdd(5);
evenOrOdd(6);
evenOrOdd(79);
evenOrOdd(452);

// ex 3

let newEvenOrOdd = (int) => {
  if (Number.isInteger(int)) {
    return (int % 2 === 0) ? console.log('EVEN') : console.log('ODD');
  } else {
    console.log('The argument entered was not an integer.');
  }
}

newEvenOrOdd(5);
newEvenOrOdd(6);
newEvenOrOdd('hello');
newEvenOrOdd([6, 7, 8]);

// ex 4

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

let answer4 = 'The function logs "Product2" "Product3" and "Product not found" because \
there are no break statements after the console.log function calls in the cases of the \
switch statement.';
console.log(answer4);

// ex 5

//return foo() ? 'bar' : qux();
// refactored as an if statement
// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// ex 6

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
let answer6 = 'The function call should log "Empty" to the console.';
console.log(answer6);
console.log('Correction: The function logs "Empty" bc in JS an empty array \
is not considered falsy, but rather it is truthy.');

// ex 7

let tenCharUpperCase = (string) => {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(tenCharUpperCase('family'));
console.log(tenCharUpperCase('my name is laren'));
console.log(tenCharUpperCase('whatzitooya'));

// ex 8
let numberRange = (num) => {
  if (typeof num !== 'number') {
    console.log('Argument passed is not a number.');
    return;
  }
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else if (num < 0) {
    console.log(`${num} is less than 0`);
  }
}

numberRange(-1);
numberRange(0);
numberRange(50);
numberRange(51);
numberRange(100);
numberRange(101);
numberRange();
numberRange('hey');

