'use strict';

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`Car ${this.make}, Speed ${this.speed}`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`Car ${this.make}, Speed ${this.speed}`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
const test = {};
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
console.log(mercedes.__proto__ === Car.prototype);
console.log(test instanceof Object);

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 100);
console.log('Ford', ford);
console.log(ford.speedUs);
ford.speedUs = 90;
console.log(ford.speedUs);
console.log(ford.speed);

const CarProto = {
    getBrand () {
        return this.make;
    },

    init(make, speed) {
        this.make = make;
        this.speed = speed;
    }
}

const maruti = Object.create(CarProto);
console.log(maruti);
maruti.init('Maruti', 100);
console.log(maruti.getBrand());

/**
 * Prototype Inheritance
 */

function Person(firstName, lastName) {
    console.log('Person Constructor');
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log(`Hello, My name is ${this.name} and I study ${this.course}`);
}

function Student(firstName, lastName, course) {
    console.log('Student Constructor');
    Person.call(this, firstName, lastName);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

console.dir(Student.prototype.__proto__)

Student.prototype.getCourse = function() {
    return this.course;
}

const raj = new Person('Raj', 'Surya');
console.log(raj);
console.log(Student.prototype.constructor);
const divya = new Student('Divya', 'Raj', 'CSE');
console.log(divya);
console.log(divya.getCourse());
divya.greet();
const prakhas = new Student('Prakhas', 'Kumar', 'ECE');
prakhas.greet();
console.log(Student.prototype.constructor);


function Ev(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.constructor = Ev;

Ev.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

Ev.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed}, with the charge of ${this.charge}`);
}

const electricCar = new Ev('Tesla', 120, 23);
electricCar.accelerate();
electricCar.brake();
electricCar.chargeBattery(50);
electricCar.accelerate();

