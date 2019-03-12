import { findMin } from "./153-find-minimum-in-rotated-sorted-array";

describe("Find munimum in rotated sorted array", () => {
  it("should return undefined if the give parameter is not an array", () => {
    expect(findMin(3)).toBeUndefined();
  });

  it("should return the smallest number in rotated sorted array corretly", () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    expect(findMin([1, 2, 3, 4, 5, 6])).toBe(1);
  });
});
