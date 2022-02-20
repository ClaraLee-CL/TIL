'use strict';

// Jason
// JavaScript Object Notation

// 1. Object to Jason
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump :() => {     // except function(함수)(also A function that only JavaScript has such as "Symbol")
    console.log(`${this.name} can jump!`);  
  },
}
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color'])
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'clara' : value;
})
console.log(json);

console.clear()
// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj)
rabbit.jump();
// obj.jump();  // error

console.log(rabbit.birthDate.getDate());

// console.log(obj.birthDate.getDate());  // error, because that is string (line 40)
console.log(obj.birthDate.getDate());  