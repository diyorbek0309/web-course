// V8 Engine
// NodeJS - runtime environment for JS

var price1 = 5,
  price2 = "5",
  price3 = undefined; // Declaring variable
var _total = price1 + price2; // 11
var Total = price1 - price2; // JS -  case sensitive
var condition = price1 === price2; // false
var bool = true; //Boolean

// var - JS keyword; price1 - identifier(o'zgaruvchi nomi); = - assignment operator; 5 - data value (qiymat);
// == - equal to (tengmi?)

// Data Types in JS: number, string, undefined, null, object, BigInt, Symbol, Boolean (mantiqiy);
// Data Types in JS: primitive and reference;
// Boolean - true and false;

// Var, let, const

const constant = "Hello";

//constant = "World"; // xatolik, TypeError

let test = 123;

// let test = 345;

// console.log(test);

// Arithmetic Operators

let result1 = 3 ** 3; // 27; ** - Exponentiation

let result2 = 22 % 5; // 2; % - Modulo operator

result2++; // result2 = result2 + 1; ++ - increment
result2--; // result2 = result2 - 1; -- - decrement

//console.log(result2); // 2

// Assignment Operators

let x = 10;
let y = 5;

x += y; // x = x + y; x = 15

x **= y; // x = x ** y; x = 100000

// Comparison Operators

let compare1 = 123;   // Number
let compare2 = "123"; // String
let compare3 = 120;

// let result = (compare1 < compare3 && compare2 == compare1) ? "katta" : "kichik"; // ternary operator

// let result = true && false; // 1 x 0 = 0; false
// let result = false && false; // 0 x 0 = 0;   false
// let result = true && true; // 1 x 1 = 1;   true
let result = true || false; // 1 + 0 = 1;   true
result = false || false; // 0 + 0 = 0;   false
result = !false;

// console.log(result);

console.log(typeof compare2);
