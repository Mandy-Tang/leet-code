import { dominantIndex } from "./747-largest-number-at-least-twice-of-others";

describe("find the largest number that is at least twice of others in the given array", () => {
  it("should return undefined if the given parameter is not an array", () => {
    expect(dominantIndex("")).toBeUndefined();
  });

  it("should return -1 if the given array length is less than 2", () => {
    expect(dominantIndex([])).toBe(-1);
  });

  it("should return 0 if the given array length is 1", () => {
    expect(dominantIndex([1])).toBe(0);
  });

  it("should return the index if the largest number that at least twice of others exist, otherwise -1", () => {
    expect(dominantIndex([3, 6, 1, 0])).toBe(1);
    expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
  });
});
