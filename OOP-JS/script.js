"use strict";

const Person = function (firstName, birth) {
  this.firstName = firstName;
  this.birth = birth;

  /* Dont do this
  this.calcAge = () => {
    console.log(2037 - this.birth);
  };
  */
};

const jonas = new Person("Jonas", 1994);

console.log(jonas);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 2017);
console.log(matilda, jack);
console.log(jonas instanceof Person); /*return true*/

Person.hey = function () {
  console.log("Hey there 😀");
  console.log(this);
};

/* Prototypes */
Person.prototype.calcAge = function () {
  console.log(2037 - this.birth);
};

jonas.calcAge();
matilda.calcAge();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log("Hello");
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes("  ")) this.fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this_.fullName;
  }

  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

//

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
