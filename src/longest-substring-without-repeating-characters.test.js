import lengthOfLongestSubstring from "./longest-substring-without-repeating-characters";

describe("lengthOfLongestSubstring", () => {
  it("should return undefined if the given string is not a string", () => {
    expect(lengthOfLongestSubstring(0)).toBe(undefined);
  });

  it("should return the length of longest substring correctly", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring("a")).toBe(1);
    expect(lengthOfLongestSubstring("aaaaaaaa")).toBe(1);
    expect(lengthOfLongestSubstring("abscadfdfd")).toBe(6);
    expect(lengthOfLongestSubstring("abadadedfd")).toBe(3);
    expect(lengthOfLongestSubstring("abba")).toBe(2);
    expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
  });
});
