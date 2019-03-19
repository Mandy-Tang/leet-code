import { isPowerOfTwo } from "./231-power-of-two";

describe("check the given number and return that whether it is power of two", () => {
  it("should return true if the given number is power of true and false if not", () => {
    expect(isPowerOfTwo(1)).toBeTruthy();
    expect(isPowerOfTwo(4)).toBeTruthy();
    expect(isPowerOfTwo(16)).toBeTruthy();
    expect(isPowerOfTwo(0)).toBeFalsy();
    expect(isPowerOfTwo(5)).toBeFalsy();
    expect(isPowerOfTwo(-5)).toBeFalsy();
  });
});
