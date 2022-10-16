// age.js


// import readline-sync
let rlSync = require('readline-sync');

//
let age = Number(rlSync.question('How old are you?\n'));
let plusTen = `In 10 years, you will be ${age + 10} years old.`;
let plusTwenty = `In 20 years, you will be ${age + 20} years old.`;
let plusThirty = `In 30 years, you will be ${age + 30} years old.`;
let plusForty = `In 40 years, you will be ${age + 40} years old.`;

console.log(`You are currently ${age} years old.`);
console.log(plusTen);
console.log(plusTwenty);
console.log(plusThirty);
console.log(plusForty);