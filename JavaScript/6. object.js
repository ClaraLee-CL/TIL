'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age)
}

const clara = {name: 'clara', age: '19'}
print(clara);

// with JavaScript magic (dynamically typed language)
// can add properties later
clara.hasJab = true;
console.log(clara.hasJab);

// can delate properties late
delete clara.hasJab;
console.log(clara.hasJab);

// 2. Computed properties
// key should be always string
console.log(clara.name)
console.log(clara['name']) //string

clara['hasJob'] = true; // add
console.log(clara.hasJob);
console.log(clara['hasJob']);

const steve = {name: 'steve', age: '20'};
function printValue (obj, key) {
  // console.log(obj.key) // 'key' property in object
  console.log(obj[key])
}

printValue(steve, 'name');
printValue(steve, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: '10'};
const person2 = {name: 'steve', age: '20'};
const person3 = {name: 'dave', age: '30'};
const person4 = new Person('clara', 70);

console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in clara);
console.log('age' in clara);
console.log('hobbit' in clara);  // false
console.log(clara.habbit);  // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();

for(let key in steve){
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for(let value of array) {
  console.log(value);
}

// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = {name: 'elsa', age: 13};
const user2 = user;
// user2.name = 'coder'
// console.log(user) // {name: 'coder', ege: 13}

console.clear(); 

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}

console.log(user3);

// recent way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color : 'red' };
const fruit2 = { color : 'yello', size: 'big' };
const fruit3 = { color : 'green', size: 'small' };
const mixedFruit = Object.assign({}, fruit1, fruit2, fruit3);

console.log(mixedFruit.color);
console.log(mixedFruit.size);
console.log(mixedFruit);