import Car from "./1-carClass.mjs";

class ElectricCar extends Car {
  // Initializes a new instance of the ElectricCar class.
  constructor(make, model, year, battery_size = 75) {
    super(make, model, year);
    this.battery_size = battery_size;
  }

  describeBattery() {
    // Print a description of the battery size of the electric car.
    console.log(`This car has a ${this.battery_size}-kWh battery.`);
  }

  getDescription() {
    // Returns a formatted string describing the car.
    return `${super.getDescription()}`;
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 2022);
console.log(myElectricCar.getDescription());
myElectricCar.describeBattery();
