// recursion practice
function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(3);
doubler(3.5);