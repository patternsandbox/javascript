import Car from "./index";

test("Stage 2 draft function decorator", () => {
    const upgraded = new Car({ body: "sedan", model: "Camry", sunroof: false });

    const result = upgraded.assemble();

    expect(result.tint).toBeTruthy();
    expect(result.color).toEqual("Yellow");
    expect(result.model).toEqual("Camry");
});
