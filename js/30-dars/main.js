let x = 20 / "string"; // NaN

let y = 16;

// Falsy Values: false, 0, -0, undefined, null, "", NaN (NaN - not a Number)

// console.log(x);

// If Else

// if (y % 3 === 0) {
//   console.log("x is true");
// } else {
//   console.log("x is false");
// }

// If Else If

// if (y % 4 === 0) {
//   console.log("y is divisible to 4");
// } else if (y % 4 === 1) {
//   console.log("remainder is 1");
// } else if (y % 4 === 2) {
//   console.log("remainder is 2");
// } else {
//   console.log("else");
// }

// Ternary Operator

// let result =
//   y % 4 === 0
//     ? "y is divisible to 4"
//     : y % 4 === 1
//     ? "remainder is 1"
//     : y % 4 === 2
//     ? "remainder is 2"
//     : "else";

// console.log(result);

// Switch case

// switch (y % 4) {
//   case 0:
//     console.log("y is divisible 4");
//     break;
//   case 1:
//     console.log("remainder is 1");
//     break;
//   case 2:
//     console.log("remainder is 2");
//     break;
//   default:
//     console.log("else");
// }

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Bunday hafta kuni yo'q!";
// }

// console.log(day);

let myName = "Diyorbek";

//let text = `Hello ${myName} ${y}`; //backtick

let text = "Hello " + myName + " " + y;

console.log(text);
