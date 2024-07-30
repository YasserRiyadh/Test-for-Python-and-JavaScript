def fizz_buzz() -> None:
    for i in range(1, 51):
        if i % 3 == 0 and i % 5 == 0: # print FizzBuzz if `i` is divisible by both 3 and 5
            print("FizzBuzz")
        elif i % 3 == 0: # print Fizz if `i` is divisible by 3
            print("Fizz")
        elif i % 5 == 0: # print Buzz if `i` is divisible by 5
            print("Buzz")
        else:
            print(i)

fizz_buzz()
