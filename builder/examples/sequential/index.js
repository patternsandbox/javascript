export default class Calculator {
  constructor(result) {
    this.result = result;
  }

  static get Builder() {
    class Builder {
      constructor() {
        this.result = 0;
      }

      add(number) {
        this.result += number;
        return this;
      }

      subtract(number) {
        this.result -= number;
        return this;
      }

      divide(number) {
        this.result /= number;
        return this;
      }

      multiply(number) {
        this.result *= number;
        return this;
      }

      compute() {
        return new Calculator(this.result);
      }
    }

    return Builder;
  }
}
