import Calculator from "./index";

test("Calculate total", () => {
  const { result } = new Calculator()
    .add(100)
    .add(100)
    .divide(2)
    .subtract(10)
    .divide(10)
    .multiply(9)
    .compute();

  expect(result).toEqual(81);
});
