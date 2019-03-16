import { containsDuplicate } from "./217-contains-duplicate";

describe("check if contains duplicate in an array", () => {
  it("should return undefined if the give parameter is invalid", () => {
    expect(containsDuplicate("")).toBeUndefined();
  });

  it("should return false if the given array is empty", () => {
    expect(containsDuplicate([])).toBeFalsy();
  });

  it("should return true if the given array contains duplicate", () => {
    expect(containsDuplicate([2, 4, 4, 5])).toBeTruthy();
  });

  it("should return false if the given array do not contain duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 9, 4])).toBeFalsy();
  });
});
