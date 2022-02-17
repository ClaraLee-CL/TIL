// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter
// counter = counter + 1
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;  // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);  // less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6);  // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), ** finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
function check() {
  for(let i = 0; i < 10; i++){
    //wasting time
    console.log('😱');
  }
  return true;
}

// && (and), ** finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.somthing
// if (nullableObject != null) {
//   nullableObject.something;
// };

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const clara1 = {name: 'clara'};
const clara2 = {name: 'clara'};
const clara3 = clara1;

console.log(clara1 == clara2);   // difference reference values
console.log(clara1 === clara2);  // difference reference values
console.log(clara1 === clara3);  // reference value of clara3 has the same as clara1

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'hello';
if (name === 'clara') {
  console.log('Welcome, clara!');
} else if ( name === 'coder') {
  console.log('You are amaxing coder!');
} else {
  console.log('unknow')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'clara'? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const brower = 'Firefox'
switch (brower) {
  case 'IE':
    console.log('go away!')
    break;
  case 'Firefox':
  case 'Chrome':
    console.log(`love ${brower}`);
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// While loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. interate from 0 to 10 and print only even numbers (use continue)
for (let i = 1; i < 11; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(`even number: ${i}`)
}

// Q2. interate from 0 to 10 and print numbers nutil reaching 8 (use break)
for (let i = 1; i < 11; i++) {
  if (i > 8) {
    break
  } 
  console.log(`number: ${i}`)
}