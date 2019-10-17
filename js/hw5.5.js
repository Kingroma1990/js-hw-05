'use strict';
class Car {
  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
  }

  static getSpecs(car) {}

  get turnOn() {
    return this.price;
  }

  set turnOn(price) {
    this.price || 0;
  }

  turnOn() {
    this.isOn || false;
  }

  turnOff() {
    this.isOn || false;
    this.speed = 0;
  }

  accelerate(value) {}

  decelerate(value) {
    this.speed -= value;
    this.speed !== 0;
  }

  drive(hours) {
    this.distance = hours * this.speed;
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
