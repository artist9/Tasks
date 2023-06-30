function fizzBuzz(begin, end) {
  for (let i = begin; i <= end; i++) {
    console.log(
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    );
  }
}

fizzBuzz(11, 20);
