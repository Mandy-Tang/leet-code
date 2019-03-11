import { maxArea } from "./11-container-with-most-water";

describe("Container with most water", () => {
  it("should throw error argument should be an array if the give parameter is not an array", () => {
    try {
      maxArea(1);
    } catch (err) {
      expect(err).toBe("argument should be an array");
    }
  });

  it("should throw error array length should be at least 2 if the given array length is less than 2", () => {
    try {
      maxArea([1]);
    } catch (err) {
      expect(err).toBe("array length should be at least 2");
    }
  });

  it("should return the smallest number if the array length is just 2", () => {
    expect(maxArea([1, 2])).toBe(1);
  });

  it("should return the max area correctly when given an array that the length is larger than or equal 2", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
});
