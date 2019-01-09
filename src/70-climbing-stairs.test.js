import { climbStairs } from "./70-climbing-stairs";

describe("Climbing stairs", () => {
  it("should return undefined if the given parameter is not a negative number", () => {
    expect(climbStairs("")).toBeUndefined();
  });

  it("should return 0 if the given step of stairs in 0", () => {
    expect(climbStairs(0)).toBe(0);
  });

  it("should return the number of distinct ways correctly", () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
  });
});
