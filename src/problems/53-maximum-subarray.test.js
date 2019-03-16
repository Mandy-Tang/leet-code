import { maxSubArray } from "./53-maximum-subarray";

describe("find the continuous subarray which has the largest sum and return the sum", () => {
  it("should return undefined if the given parameter is invalid", () => {
    expect(maxSubArray("")).toBeUndefined();
    expect(maxSubArray([])).toBeUndefined();
  });

  it("should just return the single value if the length of the given array is 1", () => {
    expect(maxSubArray([1])).toBe(1);
  });

  it("should return the sum", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
