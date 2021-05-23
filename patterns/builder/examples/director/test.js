import { Director} from "./index";

test("build entry level Audi", () => {
  const audi = new Director().buildEntryLevelAudi().build();
  expect(audi.torque).toEqual(258);
});
