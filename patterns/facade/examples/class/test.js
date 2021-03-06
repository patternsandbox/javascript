import AutoLoan from "./index";

test("approved", () => {
  const autoLoan = new AutoLoan("Bill");
  const result = autoLoan.applyFor("50000");

  expect(`Bill has been approved for a $50000 auto loan.`).toEqual(result);
});

test("denied", () => {
  const autoLoan = new AutoLoan("Bob");
  const result = autoLoan.applyFor("50000");

  expect(`Bob has been denied for a $50000 auto loan.`).toEqual(result);
});
