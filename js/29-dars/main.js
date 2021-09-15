// let x = 12, y = '12';
// let z = x == y ? "teng emas" : "teng";

// console.log(z);

// Regular function

let test = "test"; // global variable

function sum(x, y) {
  let test1 = "test1"; // local variable
  return x + y; // funksiya tanasi
  console.log(x + y); // Unreachable code
}

const result = sum(12, 14); // 12, 14 - argument

// console.log(result);

// console.log(sum(3, 5));

// sum - funksiya nomi; x, y - funksiya parametrlari;

// IIFE - Immadiately Invoked Function Expression

// Objects

let laptop = {
  model: "HP 250 G6", // model - property, "HP 250 G6" - value
  color: "grey",
  weight: "2kg",
  ram: "12gb",
  memory: "1000gb",
  takePhoto: function () {
    console.log("Photo");
  },
};

laptop.color = "black";

// console.log(laptop.color);

// laptop.takePhoto();

// Arrays

const groupmates = ["Sanjar0", "Rasul1", "Donyor2", 9513];

const cars = new Array("Saab", "Volvo", "BMW");

groupmates[4] = "Jalol";

groupmates.push("Xolbek");
groupmates.push("Doston");

groupmates.pop();

// console.log(groupmates);
// console.log(cars[cars.length - 1]);

const arrayOfArrays = [
  [1, 2, 3],
  ["1", "2", "3"],
  { weight: "68kg", height: "182" },
];

console.log(arrayOfArrays[2]["height"]);
