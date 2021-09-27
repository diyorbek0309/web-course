// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const cars = ["BMW", "Tesla", "Ford"];
const numbers = [12, 34, 8, 3, 46];

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

// let result = fruits.toString();
// let result = fruits.join("*");
// let result = fruits.shift();       // boshidan o'chiradi va o'chirgani qaytaradi
// let result = fruits.unshift("Kiwi");  // boshidan qo'shadi va uzunligini qaytaradi

// delete fruits[2];

// fruits.splice(1, 3, "Lemon", "Kiwi", "Peach");
// fruits.splice(1, 3);

// let result = cars.concat(fruits, cars, fruits)
// let result = fruits.slice(1, 4)
// let result = fruits.sort();
// let result = fruits.reverse();
// let result = numbers.sort(function(x, y){return x - y});
// let result = numbers.sort(function(x, y){return y - x});
// let result = cars.sort(function(m, n){return m.year - n.year});

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let result = fruits.indexOf("Orange")
// let result = fruits.includes("asasasa")

// let result = fruits.forEach(function (item) {
//   console.log(item + 1);
// });

// let result = fruits.map(test);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i] + 1);
// }

const ages = [23, 45, 12, 38, 29];

// let result = ages.filter(function(element){return element < 30})
// let result = ages.reduce(myFunction);
// let result = ages.find(function (element) {
//   console.log(element);
//   return element === 29;
// });

let result = ages.findIndex(function (element) {
  return element === 29;
}); // callback

// console.log(result);
// console.log(ages);
// console.log(fruits);

function test(item) {
  console.log(item + 1);
}

function myFunction(total, value) {
  // console.log(total);
  return total + value;
}

function splitNumbers(n) {
  let result = [];

  while (n >= 1) {
    m = n % 10;
    result.unshift(Math.floor(m));
    n /= 10;
  }

  uniqueArray = result.filter(function (item, pos) {
    return result.indexOf(item) == pos;
  });

  return uniqueArray;
}

function doubleton(n) {
  let i = n + 1;
  while (true) {
    if (splitNumbers(i).length === 2) {
      break;
    }
    i++;
  }
  return i;
}

console.log(doubleton(1234));

