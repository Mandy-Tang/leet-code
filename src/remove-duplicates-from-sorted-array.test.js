import { removeDuplicates } from "./remove-duplicates-from-sorted-array";

describe("removeDuplicates", () => {
  it("should return undefined if the given parameter is not an array", () => {
    expect(removeDuplicates(3)).toBeUndefined();
  });

  it("should return 0 when the given array is empty", () => {
    expect(removeDuplicates([])).toBe(0);
  });

  it("should return 1 when the length of the given array is 1", () => {
    expect(removeDuplicates([1])).toBe(1);
  });

  it("should return the length of the new non-duplicated array and the given parameter should be changed to that the non-duplicated array is at the head of the parameter", () => {
    const testedData = [0, 1, 2, 2, 4, 4, 5];
    expect(removeDuplicates(testedData)).toEqual(5);
    expect(testedData.slice(0, 5)).toEqual([0, 1, 2, 4, 5]);
  });
});
