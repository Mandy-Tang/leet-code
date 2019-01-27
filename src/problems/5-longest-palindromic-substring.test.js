import longestPalindrome from "./5-longest-palindromic-substring";

describe("Longest Palindromic Substring", () => {
  it("should return an empty string if the given string is empty", () => {
    expect(longestPalindrome("")).toBe("");
  });

  it("should return the single string if the given string is single", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  it("should return the longest palindromic substring correctly", () => {
    expect(longestPalindrome("ebabc")).toBe("bab");
    expect(longestPalindrome("abcda")).toBe("a");
    expect(longestPalindrome("bb")).toBe("bb");
  });
});
