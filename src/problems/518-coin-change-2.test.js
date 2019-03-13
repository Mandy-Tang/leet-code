import { change } from "./518-coin-change-2";

describe("Coin Change 2", () => {
  it("should return the number of combinations that make up that amount when given the amount and the coins", () => {
    expect(change(6, [])).toBe(0);
    expect(change(5, [1, 2, 3])).toBe(5);
    expect(change(3, [2])).toBe(0);
    expect(change(10, [10])).toBe(1);
  });
});
