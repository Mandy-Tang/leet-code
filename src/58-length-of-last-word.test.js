import { lengthOfLastWord } from "./58-length-of-last-word";

describe("Length of Last Word", () => {
  it("should return undefined if the given string is invalid", () => {
    expect(lengthOfLastWord(1111)).toBeUndefined();
  });

  it("should return 0 if can not find the last word", () => {
    expect(lengthOfLastWord("         ")).toBe(0);
    expect(lengthOfLastWord("")).toBe(0);
  });

  it("should return the length of the last word", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });
});
