class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep!";
  }
  toString() {
    const { make, model, year } = this;
    return `The vehicle is a ${make} ${model} from ${year}.`;
  }
}

const myFirstVehicle = new Vehicle("Honda", "Accord", 1996);
myFirstVehicle.honk();
myFirstVehicle.toString();

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

const myFirstCar = new Car("Chevy", "Malibu", 2016);
myFirstCar.honk();
myFirstCar.toString();
myFirstCar.numWheels;

class Mototcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

const myFirstMotorcycle = new Mototcycle("BMW", "S 1000 RR", 2024);
myFirstMotorcycle.honk();
myFirstMotorcycle.toString();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels;

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(newVehicle) {
    const { vehicles, capacity } = this;
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (vehicles.length >= capacity) {
      return "Sorry, we are full!";
    }
    vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}

const garage = new Garage(2);
garage.add(new Car("Ford", "Edge", 2016));
garage.vehicles;
garage.add("Pizza");

garage.add(new Mototcycle("BMW", "S 1000 RR", 2024));
garage.vehicles;
