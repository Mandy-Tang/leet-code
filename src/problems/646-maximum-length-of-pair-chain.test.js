import { findLongestChain } from "./646-maximum-length-of-pair-chain";

describe("Maximum lenght of pair chain", () => {
  it("should return undefined if the given parameter is invalid", () => {
    expect(findLongestChain("")).toBeUndefined();
  });

  it("should return 0 if the given array is empty", () => {
    expect(findLongestChain([])).toBe(0);
  });

  it("should return the maximum length of pair then when given an array of pair", () => {
    expect(findLongestChain([[1, 2], [2, 3], [3, 4]])).toBe(2);
  });
});
