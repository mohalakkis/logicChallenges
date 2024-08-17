const number = () => {
  let number = 0;

  for (number; number < 100; number++) {
    if (number % 3 === 0) {
      console.log("Fizz");
    }

    if (number % 3 === 0) {
      console.log("Buzz");
    }
    console.log(number);
  }
};

number();
