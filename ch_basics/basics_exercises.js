// exercise 1: 
console.log('Laren ' + 'Cozart');

// exercise 2:
const num = 4936
let numUpdate = num

unit = numUpdate % 10;
numUpdate = (numUpdate - unit) / 10;

ten = numUpdate % 10;
numUpdate = (numUpdate - ten) / 10;

hundred = numUpdate % 10;
numUpdate = (numUpdate - hundred) / 10;

thousand = numUpdate;

answer2 = `In the number ${num}, 
the thousands place is: ${thousand}, 
the hundreds place is: ${hundred},
the tens place is: ${ten},
and the units place is: ${unit}.`

console.log(answer2);

// exercise 3:
answerObject = { 'true': 'string', false: 'boolean', 1.5: 'number', 2: 'number',
'undefined': 'undefined', '{foo: "bar"}': 'object' }

console.log(answerObject);

// exercise 4:
console.log('5' + 10);
answer4 = 'The following code logs 510 instead of 15 because of "implicit coersion", where\
JavaScript evaluates the expression as string concatenation rather than an addition operation. This \
is because the first operator is a string ("5" + 10).';
console.log(answer4);

// exercise 5:
console.log(Number('5') + 10);

// exercise 6:
expression = `The value of 5 + 10 is ${Number('5') + 10}.`;
console.log(expression);

// exercise 7:
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]); 
console.log('Undefined is logged to the console, instead of an error being raised.');

// exercise 8:
let names = ['Chai', 'Earl', 'English', 'Thai', 'Green', 'Hibiscus'];

// exercise 9:
let pets = {
  'Chai': 'cat',
  'Earl': 'cat',
  'Alle': 'dog',
  'Spider': 'goldfish',
  'Fish': 'snake',
}

// exercise 10:
answer10 = 'The expression "foo === Foo" will return false because capital and\
 lower case letters return different UTF-8/ ASCII values.'
console.log(answer10);
console.log('foo' === 'Foo');

// exercise 11:
answer11 = 'The expression "parseInt("3.1415")" will evaluate to "3"';
console.log(answer11);
console.log(parseInt('3.1415'));

// exercise 12:
answer12 = 'The expression "12" < "9" will evaluate to "True" probably because the UTF8 \
character "1" is less than "9". Either way, it will not accuratley compare the two numbers.'
console.log(answer12);
console.log('12' < '9');

