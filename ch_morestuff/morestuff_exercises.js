// ex 1
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

console.log('EX 1: I believe that these 2 arrays are aliased. \
\n I think array2 logs as [1, 4, 3].');

// ex 2
console.log('EX 2: The stack trace tells me that JS discovered an error at \n\
line 4, char 15 where the variable greeting was not declared. Also there maybe be \n\
a hello function connected to the greeting variable.');

// ex 3
console.log(`EX 3: ${Math.sqrt(37)}`);

// ex 4
let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

console.log(`EX 4: list1: ${Math.max(...list1)}, \
list2: ${Math.max(...list2)}, list3: ${Math.max(...list3)}`);

// ex 5
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
console.log('EX 5: The above function takes as string of text and splits \n\
it into words. It then takes the words(value) and assigns them to their length. \n\
Now we have an array of numbers that are the length of the words. \n\
Then it reverses the order of the array"s elements - but im not sure why.');

// ex 6
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let checkForMatch = (array, string) => {
  let rgx = new RegExp(string);
  return array.filter(element => rgx.test(element));
}

console.log(`EX 6: ${checkForMatch(words, /lab/)}`);

// ex 7
console.log('EX 7: Exception handling is when you anticipate and handle errors \n\
that will occur in your program by "catching" them and producing an \n\
error message or output. It should be used for errors that are anticipated \n\
and complex. Simple errors that are expected should be debugged. \n\
Exception handling often uses a "try/ catch/ finally" keyword structure.');

// ex 8: challenging exercise *
let isNotANumber = (value) => {
  if (value !== value) return true;
  else return false;
}
console.log('EX 8:')
console.log(isNotANumber(3));
console.log(isNotANumber('string'));
console.log(isNotANumber(NaN));
console.log(isNotANumber(null));

// ex 9: challenging exercise
let checkForNegZero = (num) => {
  if (10/num === -Infinity) return true;
  else return false;
}
console.log('EX 9:');
console.log(checkForNegZero(1));
console.log(checkForNegZero(0));
console.log(checkForNegZero(-1));
console.log(checkForNegZero(-0));

// ex 10: challenging exercise
let x = '5';
x = x + 1;
console.log('x + 1:  ' + x);

let y = '5'
console.log('y++:  ' + y++);

console.log('EX 10: I think y++ will log either 5 or 6. \n\
I think the ++ is an operator for numerical operands \n\
so I think it will return a number. The postfix increment \n\
might return y as its pre incremented value of 5. My guess \n\
this, that it will return 5.');
