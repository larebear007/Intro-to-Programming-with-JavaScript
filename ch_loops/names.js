// while loop

let names = ['Laren', 'Brian', 'Zach', 'Maria', 'Sarah', 'Brianne', 'Kaylee', 'Riley'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log('while loop: ', upperNames);

// refactored as a for loop

let names1 = ['Laren', 'Brian', 'Zach', 'Maria', 'Sarah', 'Brianne', 'Kaylee', 'Riley'];
let upperNames1 = [];

for (let index = 0; index < names1.length; index += 1) {
  let upperCaseName = names1[index].toUpperCase();
  upperNames1.push(upperCaseName);
}

console.log('for loop: ', upperNames1);