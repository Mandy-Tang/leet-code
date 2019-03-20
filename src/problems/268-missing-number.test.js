import { missingNumber } from "./268-missing-number";

describe("Find the missing number", () => {
  it("should return the missing number", () => {
    expect(missingNumber([2, 4, 5, 1, 0])).toBe(3);
    expect(missingNumber([])).toBe(0);
  });
});
