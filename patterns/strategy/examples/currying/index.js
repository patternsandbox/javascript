const operation = (operator) => (a) => (b) => operator(a, b);

const add = operation((a, b) => a + b);
const subtract = operation((a, b) => a - b);
const multiply = operation((a, b) => a * b);

export { add, subtract, multiply };
