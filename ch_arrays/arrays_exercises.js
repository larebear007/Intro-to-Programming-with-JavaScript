// ex 1
let array1 = [1, 2, undefined, 4];
console.log('ARRAY1 LENGTH: my guess- 4, actual-' + array1.length);

let array2 = [1];
array2.length = 5;
console.log('ARRAY2 LENGTH: my guess- 5, actual-' + array2.length);

let array3 = [];
array3[-1] = [1];
console.log('ARRAY3 LENGTH: my guess- 0, actual-' + array3.length);

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
console.log('ARRAY4 LENGTH4: my guess- 3, actual-' + array4.length);

let array5 = [];
array5[100] = 3;
console.log('ARRAY5 LENGTH5: my guess- 101, actual-' + array5.length);
console.log(array5);

// ex 2
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// ex 3
console.log('\n');
let myArray1 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray1.forEach(array => {
  if (Array.isArray(array) === true) {
    array.forEach(num => {
      if (num % 2 === 0) {
        console.log(num);
      }
    })
    }
  })

// ex 4
  console.log('\n');
  let myArray2 = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];

  let evenOddArray = myArray2.map(num => {
    if (num % 2 === 0) return 'even';
    else if (num % 2 !== 0) return 'odd';
  })
  console.log(evenOddArray);

// ex 5
  let findIntegers = array => {
    return array.filter(element => Number.isInteger(element));
  }

  let things = ['a', 'b', 1, 2, 'c', 3, 'd', 4, 'e'];
  console.log(findIntegers(things));

// ex 6
  let oddStrings = array => {
    let numbers = array.map(element => {
      return element.length;
    })
    return numbers.filter(element => element % 2 !== 0);
  }
  
  let strings = ['1', '12', '123', '1234', '12345'];
  console.log(oddStrings(strings));

// ex 7
  let sumOfSquares = array => {
    return array.reduce((accumulator, element) => accumulator + (element * element), 0)
  }

  let numbers = [1, 2, 3, 4];
  console.log(sumOfSquares(numbers));

// ex 8
  let oddStrings1 = array => {
    return array.reduce((accumulator, element) => {
      if (element.length % 2 !== 0) {
          accumulator.push(element.length);
      }
      return accumulator;
    }, []);
  }
  
  let strings1 = ['1', '12', '123', '1234', '12345'];
  console.log('EX 8:', oddStrings1(strings1));

// ex 9 - uses includes in a function
  let numbers1 = [1, 3, 5, 7, 9, 11];
  console.log(numbers1.includes(3));

  let numbers2 = [];
  console.log(numbers2.includes(3));

  let numbers3 = [2, 4, 6, 8];
  console.log(numbers3.includes(3));

// ex 10
  let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];

  arr[1][3] = 606;
  console.log(arr);