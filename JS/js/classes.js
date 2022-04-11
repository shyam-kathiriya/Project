/* *************************************************
* ****************** CLASSES ***********************
**************************************************** */

/*
  ---class is a templet for JS object. A JavaScript class is not an object.
  ---class is used for creating a object.
  ---class keyword is used for creating a class.
    --constructor() method is always present in class.
      -if we do not create constructor method JS automatically create a empty constructor()
  ---we can any number of method in class
*/

class ArithmaticOpt {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  sub() {
    return this.a - this.b;
  }
  mul() {
    return this.a * this.b;
  }
}

let obj1 = new ArithmaticOpt(4, 9);
let sum = obj1.sum();
let sub = obj1.sub();
let mul = obj1.mul();
console.log(sum);
console.log(sub);
console.log(mul);

class Modulo extends ArithmaticOpt {
  constructor(a, b) {
    super(a, b);
  }
  mod() {
    return this.a % this.b;
  }
}
const mode = new Modulo(12, 7);
console.log(mode.mod());


class Car {
  constructor(carname, model) {
    this.carName = carname;
    this.model = model;
  }
  getInfo() {
    return this.carName + " " + this.model;
  }
  static carPvt() {
    return "this is a static method for Car class.";
  }
}

class SubCar extends Car {
  constructor(carname, model) {
    super(carname, model);
  }
}

let car1 = new Car("ford", 2019);
let subcar1 = new SubCar("ford", 2019);
// console.log(car1.carPvt()); //return it is not a funciton
// console.log(subcar1.carPvt()); //same as above
console.log(Car.carPvt()); //bcz of sattic method it is only accessd by class itself
