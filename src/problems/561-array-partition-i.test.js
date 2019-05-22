import { arrayPairSum } from "./561-array-partition-i";

describe("arrayPairSum", () => {
  it("should return undefined if the given parameter is not an array", () => {
    expect(arrayPairSum("")).toBeUndefined();
  });

  it("should return undefined if the length of the given array is not 2n", () => {
    expect(arrayPairSum([1])).toBeUndefined();
  });

  it("should return 0 if the length of the given array is empty", () => {
    expect(arrayPairSum([])).toBe(0);
  });

  it("should return the sum of pair as expected", () => {
    expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
  });
});
