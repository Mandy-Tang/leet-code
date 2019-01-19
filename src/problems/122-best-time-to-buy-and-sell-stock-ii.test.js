import maxProfit from "./122-best-time-to-buy-and-sell-stock-ii";

describe("Best Time to Buy and Sell Stock II", () => {
  it("should return undefined if the given array is invalid", () => {
    expect(maxProfit()).toBeUndefined();
    expect(maxProfit(1)).toBeUndefined();
    expect(maxProfit({})).toBeUndefined();
  });

  it("should return 0 if the length of given array is 0 or 1", () => {
    expect(maxProfit([])).toBe(0);
    expect(maxProfit([1])).toBe(0);
  });

  it("should return the max profit given an array", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([5, 2, 3, 2, 6, 6, 2, 9, 1, 0, 7, 4, 5, 0])).toBe(20);
  });
});
