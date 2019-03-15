import { search } from "./33-search-in-rotated-sorted-array";

describe("Search i rotated sorted array", () => {
  it("should return undefined if the given paramters are not right", () => {
    expect(search("", "ddd")).toBeUndefined();
  });

  it("should return the index if it can find the searching number in the given array", () => {
    expect(search([3, 4, 5, 0, 1], 0)).toBe(3);
  });

  it("should return -1 if it can find the searching number in the given array", () => {
    expect(search([3, 4, 9, 1, 2], 0)).toBe(-1);
  });
});
