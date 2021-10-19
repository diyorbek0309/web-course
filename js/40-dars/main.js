// OOP - Object Oriented Programming - Obyektga yo'naltirilgan dasturlash
// Functional programming - Funksional dasturlash
// Syntactic sugar
// Object - instance of class
// Inheritance - merosxo'rlik
// Public, protected, private - access modifiers

// Inheritance, Encapsulation, Polymorphism, Abstraction, Data hiding 

class BaseClass {
  constructor(value) {
    this.value = value;
    this.plus();
  }

  plus(...args) {
    for (let i = 0; i < args.length; i++) {
      this.value += args[i];
    }
    return this;
  }

  get() {
    return this.value;
  }
}

class IntBuilder extends BaseClass {
  constructor(n = 0) {
    super(n);
    this.value = n;
  }

  static minus(...args) {
    for (let i = 0; i < args.length; i++) {
      this.value -= args[i];
    }
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    this.value = Math.trunc(this.value / n);
    return this;
  }

  mod(n) {
    this.value = this.value % n;
    return this;
  }

  static random(from, to) {
    return Math.round(Math.random() * (from - to) + to);
  }
}

let obj = new BaseClass(4);
let intBuilder = new IntBuilder(4);

// console.log(IntBuilder.random(1, 100));

// console.log(
//   intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get()
// );

class Person {
  constructor(firstName, id) {
    this.firstName = firstName;
    this.id = id;
  }

  addAdress(add) {
    this.add = add;
  }

  getDteails() {
    console.log(`Name: ${this.firstName}, Id: ${this.id}`);
  }
}

const person = new Person("Diyorbek", 1);
// person.addAdress("Urgench")
// person.getDteails()

class Vehicle {
  constructor() {}

  run() {
    console.log("I am running...");
  }
}

class Car extends Vehicle {
  constructor() {
    super();
  }

  run() {
    console.log("I am a car");
  }
}

const car = new Car();
// car.run();
