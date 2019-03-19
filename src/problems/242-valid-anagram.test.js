import { isAnagram } from "./242-valid-anagram";

describe("check anagram", () => {
  it("should return ture if the given two strings ara anagram and false if not", () => {
    expect(isAnagram("anagram", "nagaram")).toBeTruthy();
    expect(isAnagram("daf", "ddf")).toBeFalsy();
  });
});
