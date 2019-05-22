import { findPairs } from "./532-k-diff-pairs-in-an-array";

describe("fint k diff pairs in an array", () => {
  it("should return undefined if the given parameter is not right", () => {
    expect(findPairs("", "")).toBeUndefined();
  });

  it("should return 0 if the given k is not positive", () => {
    expect(findPairs([1, 2, 3, 4, 5], -1)).toBe(0);
  });

  it("should return 0 if the given array length is 0 or 1", () => {
    expect(findPairs([], 4)).toBe(0);
    expect(findPairs([1], 4)).toBe(0);
  });

  it("should return the right pair count", () => {
    expect(findPairs([3, 1, 4, 1, 5], 2)).toBe(2);
    expect(findPairs([1, 2, 3, 4, 5], 1)).toBe(4);
    expect(findPairs([1, 3, 1, 5, 4], 0)).toBe(1);
  });
});
