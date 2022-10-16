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
