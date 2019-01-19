import isPalindrome from "./125-valid-palindrome";

describe("Valid Palindrome", () => {
  it("should return undefined if the given parameter is invalid", () => {
    expect(isPalindrome(5)).toBeUndefined();
    expect(isPalindrome({})).toBeUndefined();
    expect(isPalindrome()).toBeUndefined();
  });

  it("should return ture if the given string is empty", () => {
    expect(isPalindrome("")).toBeTruthy();
  });

  it("should return ture if the given string length is one", () => {
    expect(isPalindrome("d")).toBeTruthy();
  });

  it("should return ture if the given string is palindrome when just care about alphanumeric characters, otherwise return false", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy();
    expect(isPalindrome("A man")).toBeFalsy();
  });
});
