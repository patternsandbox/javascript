import AutoLoan from "../class";

test("approved", () => {
  const result = new AutoLoan("Bill").applyFor("50000");
  expect(`Bill has been approved for a $50000 auto loan.`).toEqual(result);
});

test("denied", () => {
  const result = new AutoLoan("Bob").applyFor("50000");
  expect(`Bob has been denied for a $50000 auto loan.`).toEqual(result);
});
