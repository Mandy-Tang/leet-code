import { longestCommonPrefix } from "./longest-common-prefix";

describe("longestCommonPrefix", () => {
  it("should return undefined if the given parameter is not an array", () => {
    expect(longestCommonPrefix("d")).toBeUndefined();
  });

  it("should return empty if the given string array is empty", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  it("should return the single string element if the string array just contains one string", () => {
    expect(longestCommonPrefix([""])).toBe("");
    expect(longestCommonPrefix(["dfaegg"])).toBe("dfaegg");
  });

  it("should return the longest common prefix correctly", () => {
    expect(longestCommonPrefix(["adf", "gfg"])).toBe("");
    expect(longestCommonPrefix(["adf", "adf"])).toBe("adf");
    expect(longestCommonPrefix(["add", "adf", "adfd"])).toBe("ad");
    expect(longestCommonPrefix(["afddd", "afdddqqq", "afdddddd"])).toBe(
      "afddd"
    );
  });
});
