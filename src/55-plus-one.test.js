import { plusOne } from "./55-plus-one";

describe("Plus One", () => {
  it("should return undefined if the given parameter is not an array", () => {
    expect(plusOne("")).toBeUndefined();
  });

  it("should return [1] if the given array is empty", () => {
    expect(plusOne([])).toEqual([1]);
  });

  it("should the given array plus one correctly", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
