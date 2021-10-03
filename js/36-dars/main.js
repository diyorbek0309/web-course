// Factory function
// DRY - Don't repeat yourself

const book = {
  author: "Steve Jobs",
  price: "20$",
  read: function () {
    console.log("I am reading...");
  },
};

const test = new Object();

function factoryOfBooks(author, price) {
  return {
    author,
    price,
  };
}

const newBook = factoryOfBooks("Elon Musk", "10$");
const newBook2 = factoryOfBooks("Bill Gates", "25$");

// console.log(newBook, newBook2);

// Constructor function

function Book(author, price) {
  this.author = author;
  this.price = price;
  // console.log(this);
}

const newBook3 = new Book("Steve Jobs", "20$");
// console.log(newBook3 instanceof Book);
// console.log(newBook2 instanceof Object);
// console.log(book instanceof Object);

// Primitive: number, string, null, undefined, boolean
// Reference: object, array, function

let x = 10;

let y = x;

y = 25;

// console.log(x, y);

const a = { test: 20 };

const b = a;
const c = { test: 20 };

// b.test = 30;

// console.log(a, b);
// console.log(a.test === c.test); // true
// console.log(a === c);  // false

// More about functions
// Regular function

function sum() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

// console.log(sum(1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5));

// IIFE - Immadiately Invoked Function Expressions

(function sumOfNumbers() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  // console.log(res);
  return res;
})(1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5);

let myFunction = function () {
  console.log("My Function");
};

// myFunction()

// Arrow Functions

// const sumOfArguments = (a, b, c) => {
//   return a + b + c;
// }

const sumOfArguments = (a, b, c) => a + b + c;

// Differences: this, arguments don't work

// console.log(sumOfArguments(3, 4, 5));

// Higher order function

// const firstOrderFunc = () => console.log("Hello, I am a First order function");

// const higherOrder = (myFunction) => myFunction();

// higherOrder(sumOfArguments);

const curryingFunction = (a) => (b) => (c) => (d) => a + b + c + d;

// console.log(curryingFunction(1)(2)(3)(4));

let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);

// console.log(impureAddNumber(10000));
// console.log(impureAddNumber(5));

const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat(number);

impureAddNumber(6);
console.log(numberArray); // returns [6]
console.log(pureAddNumber([1])([10])); // returns [6, 7]
