// Try - catch block

// let test = "test"



const myFunction = (a) => {
  "use strict";
  try {
    if (a > 5) {
      console.log("Done!");
    } else {
      throw new Error("Undone!");
    }
  } catch (err) {
    console.log(err);
  }

  console.log("123");
};

// myFunction(8)

var sum = 12345;

const test = () => {
  var sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += i;
  }

  console.log(i);
};

// console.log(sum);
// test();

// console.log(result);

// var x;

// x = 5;

// console.log(x);

// Var is hoisted, let and const doesn't hoisted.

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

person.firstName = "Diyorbek"

let private = "123"
// console.log(this); // window
