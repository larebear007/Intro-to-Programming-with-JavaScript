let cats = ['Chai', 'Earl', 'Haylee', 'Momo', 'Sushi'];

// function expression
cats.forEach(function(cat) {
  console.log(cat.toUpperCase());
});

// arrow function
cats.forEach(cat => console.log(cat.toUpperCase()));