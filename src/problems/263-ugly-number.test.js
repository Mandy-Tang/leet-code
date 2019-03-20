import { isUgly } from "./263-ugly-number";

describe("check a given number is ugly or not", () => {
  it("should return undeifned if the given number is invalid", () => {
    expect(isUgly("")).toBeUndefined();
  });

  it("should return true if the prime factors of the number only include 2, 3, and false when not", () => {
    expect(isUgly(1)).toBeTruthy();
    expect(isUgly(2)).toBeTruthy();
    expect(isUgly(3)).toBeTruthy();
    expect(isUgly(5)).toBeTruthy();
    expect(isUgly(6)).toBeTruthy();
    expect(isUgly(11)).toBeFalsy();
    expect(isUgly(220)).toBeFalsy();
    expect(isUgly(0)).toBeFalsy();
    expect(isUgly(-2)).toBeFalsy();
  });
});
