// Spread operator
// const test = [1, 3, 5, 7, 9];
// const obj = { firstName: "Diyorbek", lastName: "Olimov" }; // source object

// const copyOfTest = [...test];
// const copyOfObj = { ...obj };

// copyOfObj.firstName = "Sardorbek";

// console.log(test, copyOfTest);
// console.log(obj, copyOfObj);

// Rest parameter

const sum = (...args) => {
  let sum = 0;

  args.forEach((arg) => (sum += arg));

  return sum;
};

// console.log(sum(1, 2, 3, 4, 5, -2, 12, 22));

// Getter and Setter

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    // getter
    return this.language;
  },

  set lang(lang) {
    // setter
    this.language = lang;
  },
};

person.lang = "uz";

// console.log(person.lang);

// Array Destructuring

const test = [1, 3, 5, 7, 9];

// let first = test[0];
// let second = test[1];
// let third = test[2];

const [first, second, third, fourth, fifth] = test;

// console.log(first, second, third, fourth, fifth);

// Object Destructuring

const obj = { firstName: "Diyorbek", lastName: "Olimov" };

// let firstName = obj.firstName;
// let lastName = obj.lastName;

const { firstName, lastName } = obj;

console.log(firstName, lastName);