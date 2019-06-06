import { isMonotonic } from "./896-monotonic-array";

describe("check if the given array is monotonic", () => {
  it("should return undefined if the given parameter is not an array", () => {
    expect(isMonotonic("")).toBeUndefined();
  });

  it("should return true if the given array length is less than 3", () => {
    expect(isMonotonic([])).toBeTruthy();
    expect(isMonotonic([1])).toBeTruthy();
    expect(isMonotonic([1, 2])).toBeTruthy();
  });

  it("should return true if the given array is monotonic, otherwise false", () => {
    expect(isMonotonic([1, 2, 2, 3])).toBeTruthy();
    expect(isMonotonic([6, 5, 4, 4])).toBeTruthy();
    expect(isMonotonic([1, 2, 4, 5])).toBeTruthy();
    expect(isMonotonic([1, 1, 1])).toBeTruthy();
    expect(isMonotonic([1, 3, 2])).toBeFalsy();
  });
});
