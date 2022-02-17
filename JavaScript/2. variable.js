// 1. Use strict
// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous (it means to making mistake easy)
// added ECMAScript 5

'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name'
{
let name = 'clara';
console.log(name);

name =  "hello";
console.log(name);
console.log(globalName);
}

console.log(name) 
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thready safty
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17;  // integer
const size = 17.1; // decimal number

console.log(`value:${count}, type:${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
const bigInt = 123456789012345678901234567890n; // over -2^53 ~2^53

console.log(`value:${bigInt}, type:${typeof bigInt}`)

// string
const char = 'c';
const brendan =  'brendan';
const greeting = 'hello ' + brendan;

console.log(`value:${greeting}, type:${typeof greeting}`);

const helloBob = `hi ${brendan}!`; // template literals (string)

console.log(`value:${helloBob}, type:${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1;    // false

console.log(`value:${canRead}, type:${typeof canRead}`);
console.log(`value:${test}, type:${typeof test}`);

// null

let nothing = null;
console.log(`value:${nothing}, type:${typeof nothing}`);

// undefined
let x ; // let x = undefined
console.log(`value:${x}, type:${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2);  //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');

console.log(gSymbol1 === gSymbol2);  //true
console.log(`value:${gSymbol1.description}, type:${typeof gSymbol1}`);

// **important** transform a string with .description

// object, real-life object, data structure
const clara = { name: 'clara', age: 20 };
clara.name = 'eunyoung';
clara.age = 22;

console.log(clara.name);
console.log(clara.age);


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));   // h 

console.log(`value:${text}, type:${typeof text}`);

text = 1;
console.log(`value:${text}, type:${typeof text}`);

text = '7' + 5;
console.log(`value:${text}, type:${typeof text}`);

text = '8' / '2';
console.log(`value:${text}, type:${typeof text}`);

console.log(text.charAt(0));   // Error - why? runing time is diffents