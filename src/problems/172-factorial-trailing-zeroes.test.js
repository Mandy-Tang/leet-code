import trailingZeroes from "./172-factorial-trailing-zeroes";

describe("Factorial trailing zeros", () => {
  it("should the number of zeroes in the factiorial result", () => {
    expect(trailingZeroes(3)).toBe(0);
    expect(trailingZeroes(5)).toBe(1);
    expect(trailingZeroes(30)).toBe(7);
  });
});
