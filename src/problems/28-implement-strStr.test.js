import { strStr } from "./28-implement-strStr";

describe("Implement strStr()", () => {
  it("should return 0 if the given needle is an empty string", () => {
    expect(strStr("dddd", "")).toBe(0);
  });

  it("should return the index of the first matched needle in the haystack", () => {
    expect(strStr("advff", "dvf")).toBe(1);
    expect(strStr("advfdvfcf", "dvfc")).toBe(4);
  });

  it("should return -1 if there is no match in the haystack", () => {
    expect(strStr("hello world", "me")).toBe(-1);
  });
});
