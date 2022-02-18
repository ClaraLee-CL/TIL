'use strict';

// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: HELLO`);
  }
}

const clara = new Person('clara', 20)
console.log(clara.name)
console.log(clara.age)
clara.speak()

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value){
    // if (value < 0){
    //   throw Error('age can not be negative');
    // }

    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('clara', 'lee', -1);
// console.log(user1);
// console.log(user1.firstName);
// console.log(user1.lastName);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
  static publisher = 'NICE CODING';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1); 
const article2 = new Article(2);

console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, hight, color) {
    this.width = width;
    this.hight = hight;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`)
  }

  getArea() {
    return this.width * this.hight;
  }
}

class Rectangle extends Shape{}
const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw();
console.log(rectangle.getArea())


class Triangle extends Shape{
  // over writting

  draw() {
    console.log(`${this.color} color! & 🔺`)
  }

  getArea() {
    return (this.width * this.hight) / 2;
  }

  toString() {
    return `Triangle: color ${this.color}`
  }
}
const triangle = new Triangle(40, 40, 'red');
triangle.draw()
console.log(triangle.getArea())

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString())

