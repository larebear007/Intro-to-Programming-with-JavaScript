// ex 1
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name);
console.log(person['name'])

// ex 2
    // 1
    // '1'
    // undefined
    // 'hello world'
    // true
    // 'true'
console.log('All the key words presented are valid key words. But 1 and "1" \n \
represent the same key, as do true and "true".');

// ex 3
let myArray = {'Sept': 'apple', 'Oct': 'pumpkin', 'Nov': 'corn',};

for (let month in myArray) {
  console.log(myArray[month]);
}
    // correct anwer - adds length as a property to the object
let myArray1 = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray1.length; i += 1) {
  console.log(myArray1[i]);
}

// ex 4

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upperKeys = [];
for (let key in obj) {
  upperKeys.push(key.toUpperCase()); // can also be doen with map
}

console.log(upperKeys);
console.log(obj);

// ex 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj.foo);

// ex 6

console.log('"foo": primitive (string) \n\
3.1415: primitive (number) \n\
[ "a", "b", "c" ]: object (array) \n\
false: primitive (boolean) \n\
foo: neither (variable name) \n\
function bar() { return "bar"; }: object (function) \n\
undefined: primitive (undefined) \n\
{ a: 1, b: 2 }: object (simple object)');

// ex 7
myObj['qux'] = 3;
console.log('EX 7: The 2 code snippets will not have the same outcome. \n\
Snippet 1 should only output "qux". Snippet 2 will output all the keys \n\
of the prototype object.');

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// ex 8

let exampleObj = {
  key1: ':)',
  key2: ':(',
  key3: '>:)'
}
let exampleArray = ['key1', 'key2'];

let objectCopier = (object, arrayOfKeys) => {
  // check for array 
  let newObjectCopy = {};
  if (arrayOfKeys) {
    arrayOfKeys.forEach(element => {
      newObjectCopy[element] = object[element];
      }) 
  // no array provided    
  } else {
    for (let key in object) {
      newObjectCopy[key] = object[key];
    }
  }  
  
  return newObjectCopy;
}

console.log(objectCopier(exampleObj, exampleArray));
console.log(objectCopier(exampleObj));

// ex 9
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
console.log('ANSWER: I think the "foo.a" call will log the a key as hi. I think the qux call will log hi.');
console.log('CORRECTED ANSWER: foo.a did log hi, but qux logged "hello" becasue primitive values arent \
mutalbe. \n difference between object content mutation and primitive mutation.');


// ex 10
[1, 2, ["a", ["b", false]], null, {}]
console.log('the entire array = object\n\
1 = primitive \n2 = primitive \nboth arrays = objects \n\
"a" = primitive \n\
"b" and false = both primitives \nnull = primitive \n\
{} = simple object');

// ex 11
let obj11 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj11['bar'][3]['xyz'] = 606;
console.log(obj11); 