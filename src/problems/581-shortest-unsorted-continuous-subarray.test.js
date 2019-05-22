import { findUnsortedSubarray } from "./581-shortest-unsorted-continuous-subarray";

describe("find the shortest length of subarray that if sort the subarray then the whole given array is sorted", () => {
  it("should return undefined if the given paramter is not an array", () => {
    expect(findUnsortedSubarray("")).toBeUndefined();
  });

  it("should return 0 if the length of the given array is 0 or 1", () => {
    expect(findUnsortedSubarray([])).toBe(0);
    expect(findUnsortedSubarray([1])).toBe(0);
  });

  it("should return the mixmum length correctly", () => {
    expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
    expect(findUnsortedSubarray([0, 1, 2, 3])).toBe(0);
  });
});
