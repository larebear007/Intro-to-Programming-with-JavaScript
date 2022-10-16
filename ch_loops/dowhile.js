let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');

let response;
let rlsync = require('readline-sync');
do {
  response = rlsync.question('Would you like to play again?');
} while (response === 'yes' || response === 'y');