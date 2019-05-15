import { searchRange } from "./34-find-first-and-last-position-of-element-in-sorted-array";

describe("searchRange", () => {
  it("should return the first and last position of element in sorted array", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    expect(searchRange([5, 7, 7, 8, 9, 10], 8)).toEqual([3, 3]);
  });
  it("should return -1 if can not find the element", () => {
    expect(searchRange([3, 5, 8, 9], 4)).toEqual([-1, -1]);
  });
});
