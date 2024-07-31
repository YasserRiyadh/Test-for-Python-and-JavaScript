from car_class import Car

class ElectricCar(Car): # Initializes a new instance of the ElectricCar class.
    def __init__(self, make, model, year, battery_size=75):
        self.make = make
        self.model = model
        self.year = year
        self.battery_size = battery_size

    def describe_battery(self):
        # Print a description of the battery size of the electric car.
        print(f"This car has a {self.battery_size}-kWh battery.")

    def get_description(self): # Returns a formatted string describing the car.
        return f"{self.year} {self.make} {self.model}"

my_electric_car = ElectricCar('Tesla', 'Model S', 2022)
print(my_electric_car.get_description())
my_electric_car.describe_battery()
