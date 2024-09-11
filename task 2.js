function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return `The number ${number} is even.`;
    } else {
      return `The number ${number} is odd.`;
    }
  }
  
  
  let number = 10;
  console.log(isEvenOrOdd(number));