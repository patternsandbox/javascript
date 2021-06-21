import { add, subtract, multiply } from "./index";

test("add", () => {
  expect(add(10)(10)).toEqual(20);
});

test("subtract", () => {
  expect(subtract(10)(10)).toEqual(0);
});

test("multiply", () => {
  expect(multiply(10)(10)).toEqual(100);
});
