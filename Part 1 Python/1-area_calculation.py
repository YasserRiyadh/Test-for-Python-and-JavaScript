from math import pi

def calculate_area(radius: float) -> float:
    area = pi * radius ** 2
    print('The radius is:', area)
    return area

calculate_area(5)
