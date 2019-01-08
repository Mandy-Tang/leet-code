import { mySqrt } from "./69-sqrt";

describe("Sqrt", () => {
  it("should return undefined if the given paramter is not a number or it is not negative", () => {
    expect(mySqrt("")).toBeUndefined();
    expect(mySqrt(-1)).toBeUndefined();
  });
  it("should compute and return the square root of the given number", () => {
    expect(mySqrt(0)).toBe(0);
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(5)).toBe(2);
    expect(mySqrt(8)).toBe(2);
    expect(mySqrt(85)).toBe(9);
  });
});
