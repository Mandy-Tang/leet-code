import { minEatingSpeed } from "./875-koko-eating-bananas";

describe("koko eating bananas", () => {
  it("should return the minimum interger such that koko can eat all the banabas within the given hour", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
    expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
    expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
  });
});
