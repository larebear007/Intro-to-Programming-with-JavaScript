let greetingMessage = 'Good morning!';
console.log(greetingMessage);

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople();

function changeGreeting(newMessage) {
  greetingMessage = newMessage;
}

changeGreeting('What\'s up?');
greetPeople();

// Function declaration
console.log('\nFunction declaration:')
greetSomeone();

function greetSomeone() {
  console.log('Good morning');
}
