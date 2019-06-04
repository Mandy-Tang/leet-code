import { findMaxAverage } from "./643-maximum-average-subarray-i";

describe("findMaxAverage", () => {
  it("should return undefined if the given paramter is not an array or the given k is larger than the array length", () => {
    expect(findMaxAverage("", 4)).toBeUndefined();
    expect(findMaxAverage([1, 2], 3)).toBeUndefined();
  });

  it("should return the max average of the continuous subarray", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });
});
