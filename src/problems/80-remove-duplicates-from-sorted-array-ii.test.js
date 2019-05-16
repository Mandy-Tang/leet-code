import { removeDuplicates } from "./80-remove-duplicates-from-sorted-array-ii";

describe("removeDuplicates", () => {
  it("should return the array length and modify the given array correctly", () => {
    const testedArray = [1, 1, 1, 2, 2, 2, 3];
    expect(removeDuplicates(testedArray)).toBe(5);
    expect(testedArray.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
  });
});
