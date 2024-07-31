class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.odometerReading = 0;
  }

  getDescription() {
    // Return a formatted description of the car
    let description = `${this.year} ${this.make} ${this.model}`;
    return description;
  }

  readOdometer() {
    // Print the car's mileage
    console.log(`Car mileage is ${this.odometerReading}`);
  }

  updateOdometer(mileage) {
    // Update the odometer reading if the new mileage is greater or equal
    if (mileage >= this.odometerReading) {
      this.odometerReading = mileage;
    }
  }

  incrementOdometer(miles) {
    // Add the given miles to the odometer reading
    this.odometerReading += miles;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getDescription());
myCar.updateOdometer(100);
myCar.readOdometer();
myCar.incrementOdometer(50);
myCar.readOdometer();

export default Car;
