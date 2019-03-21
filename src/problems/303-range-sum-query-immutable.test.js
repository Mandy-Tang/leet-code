import { NumArray } from "./303-range-sum-query-immutable";

describe("Range sum query immutable", () => {
  it("should return the sum correctly", () => {
    const testedData = new NumArray([-2, 0, 3, -5, 2, -1]);
    expect(testedData.sumRange(0, 2)).toBe(1);
    expect(testedData.sumRange(2, 5)).toBe(-1);
    expect(testedData.sumRange(0, 5)).toBe(-3);
  });
});
