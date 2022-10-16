// variables exercises

// Ex 3: 
    // {
    //   let foo = 'bar';
    // }

    // console.log(foo);

let answer3 = 'Undefined will be logged to the console bc the variable foo is out of scope.';
console.log(answer3);

let answerCorrected = 'Correction: A reference error appeared since foo was not defined. This stopped the flow of code.';
console.log(answerCorrected);

// Ex 4:
    // const NAME = 'Victor';
    // console.log('Good Morning, ' + NAME);
    // console.log('Good Afternoon, ' + NAME);
    // console.log('Good Evening, ' + NAME);

    // NAME = 'Joe';
    // console.log('Good Morning, ' + NAME);
    // console.log('Good Afternoon, ' + NAME);
    // console.log('Good Evening, ' + NAME);

let answer4 = 'An error will appear bc a variable declared with const can not be reassigned a different\
value. (TypeError: Assignment ot constant variable)';
console.log(answer4);

// Ex 5:
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

let answer5 = "I'm not sure about this one. My guess is that foo will change to 'qux' bc the foo\
variable is on a global scope and is available to the curly brace scope.";
console.log(answer5);

let answerCorrection = 'Correction: bar was logged instead of qux, I guess becasue the reassignment was not\
available to the global scope.';
console.log(answerCorrection);

// Ex 6:
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

let answer6 = 'The code will run without an error bc the reassignment will not be evaluated since\
it is not available to the global scope.';
console.log(answer6);

