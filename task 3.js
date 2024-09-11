function calculator(num1, num2, operation) {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Error: Division by zero!';
        }
      default:
        return 'Error: Invalid operation!';
    }
  }
  
  
  let result = calculator(5, 3, '+');
  console.log(`The result is: ${result}`);