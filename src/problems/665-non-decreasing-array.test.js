import { checkPossibility } from "./665-non-decreasing-array";

describe("Check if the given array can be non-decreasing by modifying at most 1 element", () => {
  it("should return undefined if the given parameter is not array", () => {
    expect(checkPossibility("")).toBeUndefined();
  });

  it("should return true if the given array length is 0 or 1", () => {
    expect(checkPossibility([])).toBeTruthy();
    expect(checkPossibility([1])).toBeTruthy();
  });

  it("should return true if can get non-decreasing by modifying at most 1 element, otherwise false", () => {
    expect(checkPossibility([4, 2, 3])).toBeTruthy();
    expect(checkPossibility([4, 2, 1])).toBeFalsy();
    expect(checkPossibility([2, 3, 3, 2, 4])).toBeTruthy();
  });
});
