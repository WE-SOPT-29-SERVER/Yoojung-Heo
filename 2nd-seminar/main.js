const calculator = require ("./calculator");
//const add, subtract, multiply, divide = require ("./calculator")

let result;

result = calculator.add(1, 3);
console.log("add result:", result);

result = calculator.subtract(1, 3);
console.log("subtract result:", result);

result = calculator.multiply(1, 3);
console.log("multiply result:", result);

result = calculator.divide(1, 3);
console.log("divide result:", result);