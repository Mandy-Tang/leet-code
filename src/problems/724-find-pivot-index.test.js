import { pivotIndex } from "./724-find-pivot-index";

describe("Find the pivot of the given array", () => {
  it("should return undefined if the given parameter is ", () => {
    expect(pivotIndex("")).toBeUndefined();
  });

  it("should return -1 if the given array length is 0", () => {
    expect(pivotIndex([])).toBe(-1);
  });

  it("should return 0 if the given array length is 1", () => {
    expect(pivotIndex([9])).toBe(0);
  });

  it("should return the index if we can find the left sum equals to the right sum, otherwise -1", () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });
});
