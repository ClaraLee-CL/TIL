'use strict';

// Array 🎉

// 1. Declaration 
const arr1 = new Array();
const arr2 = [1 , 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);


console.clear()
// 3. Looping over an array
// print all fruits

// a. for
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i])
}

// b. for...of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. foreach
fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓','🍋');
console.log(fruits);

// pop: remove a last item from the end
fruits.pop();  // remove '🍋'
fruits.pop();  // remove '🍓'
console.log(fruits);

console.clear()
// unshift: adds an item to the beginning
fruits.unshift('🍓','🍋');
console.log(fruits)

// shift: removes an item to the beginning
fruits.shift(); // remove '🍓'
fruits.shift(); // remove '🍋'
console.log(fruits);

// note!! shift, unshift are slower than pop and push
// removes an item by index position
fruits.push('🫐', '🍍', '🍉');
console.log(fruits);

fruits.splice(1, 1); // (start: number, deleteCount: number)
console.log(fruits);

fruits.splice(1, 1, '🍒', '🍊'); // remove '🫐' and insert '🍒', '🍊'
console.log(fruits);

// concat: combines two arrays
const fruits2 = ['🍐', '🍇']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear()
console.log(fruits)
console.log(fruits.indexOf('🍒'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍐'));

// includes
console.log(fruits.includes('🫐'));
console.log(fruits.includes('🍊'));

// lastIndexOf
console.clear()

console.log(fruits)
console.log(fruits.indexOf('🍎'));

fruits.push('🍎');
console.log(fruits)

console.log(fruits.lastIndexOf('🍎'));

