// Loops

// for loop

const n = 10;
let sum = 0,
  myName = "";
let i = 1;
const arr = ["D", "i", "y", "o", "r", "b", "e", "k"];

// for (;;) {
//   // i - iterator
//   sum = sum + i; // 1; sum = 1 + 2 = 3; sum = 3 + 3 = 6; sum = 6 + 4 = 10; sum = 10 + 5 = 15;
//   i++;
//   if (i > n) {
//     break; // siklni to'xtatish uchun ishlatiladi
//   }
// }

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// while

// while (i <= n) {
//   sum += i; // entry controlled loop
//   i++;
// }

// do {
//   sum += i;
//   i++;
//   console.log("Sikl ishladi"); // exit controlled loop
// } while (i <= n);

// console.log(sum);

for (let i = 0; i < arr.length; i++) {
  myName += arr[i];
}

// console.log(myName);

// for in loop

const obj = {
  name: "Diyorbek",
  surname: "Olimov",
};

let fullName = "";

// for (let key in obj) {
//   fullName += obj[key];
// }

for (let key in arr) {
  fullName += arr[key];
}

// console.log(fullName);

// for of loop

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

// break and continue

let sumOfEvens = 0;

// for (let i = 2; i <= 10; i++) {
//   if (i % 2) {
//     console.log("Continued");
//     continue;
//   }
//   sumOfEvens += i;
// }

// console.log(sumOfEvens);

while (true) {
  if (i % 19 === 0) {
    console.log(i);
    break;
  }
  console.log(i);
  i++;
}
