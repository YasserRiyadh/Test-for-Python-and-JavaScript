class Car: # Define a class to represent a Car

    # Initialize attributes to describe a car
    def __init__(self, make, model, year): 
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_description(self): # Return a formatted description of the car
        return f"{self.year} {self.make} {self.model}"
    
    def read_odometer(self): # Print the car's mileage
        print(f"Car mileage is {self.odometer_reading}")

    def update_odometer(self, mileage):
        # Update the odometer reading if the new mileage is greater or equal
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        
    def increment_odometer(self, miles):
        # Add the given miles to the odometer reading
        self.odometer_reading += miles

my_car = Car('Toyota', 'Corolla', 2020)
print(my_car.get_description())
my_car.update_odometer(100)
my_car.read_odometer()
my_car.increment_odometer(50)
my_car.read_odometer()
