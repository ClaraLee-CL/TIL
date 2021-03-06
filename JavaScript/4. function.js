// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function pringHello() {
  console.log('Hello')
}

pringHello();

function log(message){
  console.log(message)
}

log('Hello@bye')
log(12345)

// 2.Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder'
}

const clara = { name: 'clara' };
changeName(clara)
console.log(clara);

// 3. Default parameters (added in ES6)
function showMessage(message, from ='unknown'){
  console.log(`${message} by ${from}`)
}

showMessage('Hi!')

// 4. Rest parameters (added in ES6)
function printAll(...args){
  for(let i = 0; i < args.length; i++) {
    console.log(`${args[i]} 1`);
  }

  for(const arg of args){
    console.log(`${arg} 2`);
  }

  args.forEach((arg) => console.log(`${arg} 3`))
}

printAll('apple', 'orange', 'kiwi')

// 5. Local scope
let globalMessage = 'global';  // global variable
function printMessage(){
  let message = 'hello';
  console.log(message);   // local variable
  console.log(globalMessage);

  function printAnother(){
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b){
  return a + b;
}

const result = sum(1, 2)  //3

console.log(`sum: ${sum(1, 2)}`);
console.log(`sum: ${result}`);

// 7. Early return, early exit
// BAD
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// GOOD!!
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it

const print = function() { // anonymous function
  console.log('print');
}

print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(`sum: ${sumAgain(1, 4)}`)

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function() {
  console.log('YES');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('NO');
}

randomQuiz('Wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous

// const simplePrint = function() {
//   console.log('simplePrint!');
// }
// simplePrint();

const simplePrint = () => console.log('simplePrint!');
// simplePrint();
// const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
}


// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE')
})();

// hello();

// Fun Quiz time??????
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// #1
function calculate(command, a, b) {
  if (command === add) {
    // return `sum: ${a+b}`;
    console.log(a+b)
  } else if (command === substract ) {
    // return `substract: ${a-b}`;
    console.log(a-b)
  } else if (command === divide) {
    // return `divide: ${a/b}`;
    console.log(a/b)
  } else if (command === multiply) {
    // return `multiply: ${a*b}`;
    console.log(a*b)
  } else if (command === remainder){
    // return `remainder: ${a%b}`;
    console.log(a%b)
  } else{
    console.log('return undefinded')
  }
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const remainder = (a, b) => a % b;

// console.log(calculate(remainder, 10, 5));
calculate(add, 1, 5);

// #2 ('switch' is BETTER THEN 'if')
function calculateNumber(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder': 
      return a % b;
    default:
      throw Error('unknown command');
  }
}

console.log(calculateNumber('divide', 8, 4));
