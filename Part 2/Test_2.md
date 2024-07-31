Certainly! Here are the OOP questions presented in a professional, LeetCode-style format for both Python and JavaScript.

### Python OOP Coding Test

#### Question 1: Implement a Car Class

**Description:**

Implement a class `Car` in Python. The class should have the following attributes and methods:

**Attributes:**

*   `make` (string): The manufacturer of the car.
*   `model` (string): The model of the car.
*   `year` (integer): The manufacturing year of the car.
*   `odometer_reading` (integer, default value of 0): The car's mileage.

**Methods:**

*   `__init__(self, make, model, year)`: Initializes the `Car` object with `make`, `model`, `year`, and sets `odometer_reading` to 0.
*   `get_description(self)`: Returns a formatted string describing the car.
*   `read_odometer(self)`: Prints the car's mileage.
*   `update_odometer(self, mileage)`: Sets the `odometer_reading` to the given value if it is greater than or equal to the current reading.
*   `increment_odometer(self, miles)`: Adds the given amount to the `odometer_reading`.

**Example:**

```python
my_car = Car('Toyota', 'Corolla', 2020)
print(my_car.get_description())  # Output: '2020 Toyota Corolla'
my_car.update_odometer(100)
my_car.read_odometer()  # Output: 'This car has 100 miles on it.'
my_car.increment_odometer(50)
my_car.read_odometer()  # Output: 'This car has 150 miles on it.'
```

#### Question 2: Implement an ElectricCar Subclass

**Description:**

Implement a subclass `ElectricCar` that inherits from the `Car` class. This subclass should add the following additional attribute and methods:

**Attributes:**

*   `battery_size` (integer, default value of 75): The battery size of the electric car.

**Methods:**

*   `__init__(self, make, model, year, battery_size=75)`: Initializes the `ElectricCar` object.
*   `describe_battery(self)`: Prints a statement describing the battery size.
*   `get_description(self)`: Overrides the `get_description` method to indicate the car is electric.

**Example:**

```python
my_electric_car = ElectricCar('Tesla', 'Model S', 2022)
print(my_electric_car.get_description())  # Output: '2022 Tesla Model S (Electric)'
my_electric_car.describe_battery()  # Output: 'This car has a 75-kWh battery.'
```

### JavaScript OOP Coding Test

#### Question 1: Implement a Car Class

**Description:**

Implement a class `Car` in JavaScript. The class should have the following properties and methods:

**Properties:**

*   `make` (string): The manufacturer of the car.
*   `model` (string): The model of the car.
*   `year` (integer): The manufacturing year of the car.
*   `odometerReading` (integer, default value of 0): The car's mileage.

**Methods:**

*   `constructor(make, model, year)`: Initializes the `Car` object with `make`, `model`, `year`, and sets `odometerReading` to 0.
*   `getDescription()`: Returns a formatted string describing the car.
*   `readOdometer()`: Logs the car's mileage.
*   `updateOdometer(mileage)`: Sets the `odometerReading` to the given value if it is greater than or equal to the current reading.
*   `incrementOdometer(miles)`: Adds the given amount to the `odometerReading`.

**Example:**

```javascript
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.getDescription());  // Output: '2020 Toyota Corolla'
myCar.updateOdometer(100);
myCar.readOdometer();  // Output: 'This car has 100 miles on it.'
myCar.incrementOdometer(50);
myCar.readOdometer();  // Output: 'This car has 150 miles on it.'
```

#### Question 2: Implement an ElectricCar Subclass

**Description:**

Implement a subclass `ElectricCar` that inherits from the `Car` class. This subclass should add the following additional property and methods:

**Properties:**

*   `batterySize` (integer, default value of 75): The battery size of the electric car.

**Methods:**

*   `constructor(make, model, year, batterySize=75)`: Initializes the `ElectricCar` object.
*   `describeBattery()`: Logs a statement describing the battery size.
*   `getDescription()`: Overrides the `getDescription` method to indicate the car is electric.

**Example:**

```javascript
const myElectricCar = new ElectricCar('Tesla', 'Model S', 2022);
console.log(myElectricCar.getDescription());  // Output: '2022 Tesla Model S (Electric)'
myElectricCar.describeBattery();  // Output: 'This car has a 75-kWh battery.'
```

### Submission Guidelines

1.  Complete the classes and methods in both Python and JavaScript as specified.
2.  Ensure your code is properly formatted and tested.
3.  Submit your solutions as a ZIP file containing two folders: `python` and `javascript`. Each folder should contain the respective script files.

### Evaluation Criteria

1.  Correctness of the implemented classes and methods.
2.  Proper use of OOP principles: encapsulation, inheritance, and polymorphism.
3.  Code readability and proper use of comments.
4.  Efficient use of language-specific features.

Good luck!