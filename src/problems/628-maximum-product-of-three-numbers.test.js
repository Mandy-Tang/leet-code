import { maximumProduct } from "./628-maximum-product-of-three-numbers";

describe("maximumProduct", () => {
  it("should return undefined if the given parameter is not an Array or the array length is less than 3", () => {
    expect(maximumProduct("")).toBeUndefined();
    expect(maximumProduct([1, 32])).toBeUndefined();
  });

  it("should return the maximum product correctly", () => {
    expect(maximumProduct([1, 2, 3])).toBe(6);
    expect(maximumProduct([1, 2, 3, 4])).toBe(24);
  });
});
