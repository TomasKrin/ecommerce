import { capitalizeFirstLetter } from "./string";

describe("capitalizeFirstLetter", () => {
  test("Passed value is valid", () => {
    const value = `hats`;
    const expectedValue = "Hats";
    const transfomedValue = capitalizeFirstLetter(value);

    expect(transfomedValue).toBe(expectedValue);
  });

  test("Passed value is empty string", () => {
    const value = ``;
    const expectedValue = ``;
    const transfomedValue = capitalizeFirstLetter(value);

    expect(transfomedValue).toBe(expectedValue);
  });

  test("Passed value is undefined", () => {
    const value = undefined;
    const expectedValue = ``;
    const transfomedValue = capitalizeFirstLetter(value);

    expect(transfomedValue).toBe(expectedValue);
  });

  test("Passed value is object", () => {
    //const person = {name: Tomas}
    //person.name
    //name
    const value = {};
    const expectedValue = ``;
    const transfomedValue = capitalizeFirstLetter(value);

    expect(transfomedValue).toBe(expectedValue);
  });
});
