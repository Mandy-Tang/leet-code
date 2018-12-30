import { isPalindrome } from "./palindrome-number";

describe("isPalindrome", () => {
  it("should return undefined if the given parameter is not an integer", () => {
    expect(isPalindrome("dfdff")).toBe(undefined);
    expect(isPalindrome(1.233)).toBe(undefined);
  });
  it("should return true is the given number is palindrome and false if not", () => {
    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(-111)).toBe(false);
  });
});
