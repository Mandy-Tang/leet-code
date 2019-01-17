import maxProfit from "./121-best-time-to-buy-and-sell-stock";

describe("Best time to by and sell stock", () => {
  it("should return undefined if the given array is invalid", () => {
    expect(maxProfit(1)).toBeUndefined();
    expect(maxProfit("")).toBeUndefined();
    expect(maxProfit({})).toBeUndefined();
  });

  it("should return 0 if the given array is empty or the length is one", () => {
    expect(maxProfit([])).toBe(0);
    expect(maxProfit([1])).toBe(0);
  });

  it("should return the max profit when given an array", () => {
    expect(maxProfit([1, 4])).toBe(3);
    expect(maxProfit([1, 3, 5, 2, 9])).toBe(8);
  });
});
