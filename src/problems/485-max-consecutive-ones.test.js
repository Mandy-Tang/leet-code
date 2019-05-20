import { findMaxConsecutiveOnes } from "./485-max-consecutive-ones";

describe("find the consecutive ones", () => {
  it("should return the maximum number of consecutive ones in the given array", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });
});
