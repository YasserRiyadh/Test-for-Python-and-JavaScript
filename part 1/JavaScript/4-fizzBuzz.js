function fizzBuzz() {
  for (let i = 1; i < 51; i++)
    if (i % 3 == 0 && i % 5 == 0) {
      // print FizzBuzz if `i` is divisible by both 3 and 5
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      // print Fizz if `i` is divisible by 3
      console.log("Fizz");
    } else if (i % 5 == 0) {
      // print Buzz if `i` is divisible by 5
      console.log("Buzz");
    } else {
      console.log(i);
    }
}

fizzBuzz();
