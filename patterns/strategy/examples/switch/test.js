import BrandKnownFor from "./index";

test("volvo", () => {
  expect(BrandKnownFor("volvo")()).toEqual("safety");
});

test("toyota", () => {
  expect(BrandKnownFor("toyota")()).toEqual("reliability");
});

test("mercedes", () => {
  expect(BrandKnownFor("mercedes")()).toEqual("comfort");
});

test("kia", () => {
  expect(BrandKnownFor("kia")()).toEqual("transporting from point A to B");
});
