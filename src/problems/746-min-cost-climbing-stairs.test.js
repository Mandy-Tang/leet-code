import { minCostClimbingStairs } from "./746-min-cost-climbing-stairs";

describe("minCostClimbingStairs", () => {
  it("should return undefined if the given parameter is not an array", () => {
    expect(minCostClimbingStairs("")).toBeUndefined();
  });

  it("should return undefined if the given array length is less than 2", () => {
    expect(minCostClimbingStairs([])).toBeUndefined();
    expect(minCostClimbingStairs([1])).toBeUndefined();
  });

  it("should return the minimum cost to reach the floor", () => {
    expect(minCostClimbingStairs([1, 2])).toBe(1);
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });
});
