import { searchInsert } from "./35-search-insert-position";

describe("search insert position", () => {
  it("should return undefined if the given paremters are not an array and a number", () => {
    expect(searchInsert([0, 1, 2], "")).toBeUndefined();
    expect(searchInsert("", 1)).toBeUndefined();
  });

  it("should return 0 if the given array is empty", () => {
    expect(searchInsert([], 5)).toBe(0);
  });

  it("should return the index if the given number is found", () => {
    expect(searchInsert([1, 2, 3], 2)).toBe(1);
  });

  it("should return the index where it should be insert if the given number is not found", () => {
    expect(searchInsert([3, 6, 9], 5)).toBe(1);
    expect(searchInsert([3, 6, 9], 10)).toBe(3);
  });
});
