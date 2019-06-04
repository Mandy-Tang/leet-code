import { findLengthOfLCIS } from "./674-longest-continuous-increasing-subsequence";

describe("Find the length of the longest continuous increasing subarray of the given array", () => {
  it("should return undefined if the given parameter is not an array", () => {
    expect(findLengthOfLCIS("")).toBeUndefined();
  });

  it("should return 0 if the given array length is 0", () => {
    expect(findLengthOfLCIS([])).toBe(0);
  });

  it("should return 1 if the given array length is 1", () => {
    expect(findLengthOfLCIS([1])).toBe(1);
  });

  it("should return the length of the longest continuous increasing subarray of the given array", () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
  });
});
