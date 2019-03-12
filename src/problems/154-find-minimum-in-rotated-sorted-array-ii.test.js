import { findMin } from "./154-find-minimum-in-rotated-sorted-array-ii";

describe("find minimum in rotated sorted array which may contain duplicates", () => {
  it("should return undefined if the give parameter is not an array", () => {
    expect(findMin(1)).toBeUndefined();
  });

  it("should return the minimum in rotated sorted array which may contain duplicates correctly", () => {
    expect(findMin([1])).toBe(1);
    expect(findMin([0, 2, 3, 4, 6])).toBe(0);
    expect(findMin([3, 3, 3, 1, 2])).toBe(1);
    expect(findMin([3, 3, 3, 1, 3, 3])).toBe(1);
  });
});
