import { removeElement } from "./27-remove-elements";

describe("removeElement", () => {
  it("should return undefined if the given parametes are not an array of numbers and a number", () => {
    expect(removeElement(1, 2)).toBeUndefined();
  });

  it("should return the remaing array length after remove the given number", () => {
    expect(removeElement([1, 2, 3, 3, 3, 2, 5], 3)).toBe(4);
  });
});
