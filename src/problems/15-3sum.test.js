import { threeSum } from "./15-3sum";

describe("threeSum", () => {
  test("should return undefined if the given parameter is not array", () => {
    expect(threeSum("")).toBeUndefined();
  });

  test("should return undefined if the given array is not an array of number", () => {
    expect(threeSum(["", 3])).toBeUndefined();
  });

  test("should return empty array if the given array length is less than 3", () => {
    expect(threeSum([])).toEqual([]);
    expect(threeSum([2])).toEqual([]);
    expect(threeSum([2, 3])).toEqual([]);
  });

  test.skip("should return all unique triplets in the array which gives the sum of zero.", () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    expect(threeSum([0, 3, 4])).toEqual([]);
    expect(threeSum([9, 4, 5, 3, -2, 4, -4, 0, 0, 2, -3])).toEqual([
      [4, -4, 0],
      [5, -2, -3],
      [2, -2, 0],
      [3, -3, 0]
    ]);
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    expect(
      threeSum([1, -3, -2, -4, -2, -3, 4, 3, 0, 4, 4, 4, -4, 4, -5])
    ).toEqual([[-5, 1, 4], [-4, 0, 4], [-4, 1, 3], [-3, 0, 3], [-2, -2, 4]]);
  });
});
