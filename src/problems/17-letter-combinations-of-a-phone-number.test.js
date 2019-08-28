import { letterCombinations } from "./17-letter-combinations-of-a-phone-number";

describe("letterCombinations", () => {
  test("should return undefined if the given parameter is invalid", () => {
    expect(letterCombinations()).toBeUndefined();
    expect(letterCombinations(1)).toBeUndefined();
    expect(letterCombinations("320de")).toBeUndefined();
  });

  test("should return empty array if the given parameter is empty string", () => {
    expect(letterCombinations("")).toEqual([]);
  });

  test.skip("should return all the possible letter combinations", () => {
    expect(letterCombinations("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf"
    ]);
  });
});
