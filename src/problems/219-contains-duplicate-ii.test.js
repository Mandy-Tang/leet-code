import { containsNearbyDuplicate } from "./219-contains-duplicate-ii";

describe("check an array contains duplicate and the absolute distance between them is not larger than the given number", () => {
  it("should return undefined if the given parameter is invalid", () => {
    expect(containsNearbyDuplicate("", 2)).toBeUndefined();
    expect(containsNearbyDuplicate([3, 4], "1")).toBeUndefined();
  });

  it("should return false if the length of give array is less than 2 or the given number is 0", () => {
    expect(containsNearbyDuplicate([], 4)).toBeFalsy();
    expect(containsNearbyDuplicate([1], 4)).toBeFalsy();
    expect(containsNearbyDuplicate([1, 3, 1], 0)).toBeFalsy();
  });

  it("should return false if can not find duplicates that their absolute distance not larger is the give number", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBeFalsy();
  });

  it("should return ture if can fint duplicates that their absolute distance is not larger than the give number", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBeTruthy();
    expect(containsNearbyDuplicate([99, 99], 2)).toBeTruthy();
    expect(
      containsNearbyDuplicate([1, 2, 3, 1, 2, 3, 9, 9, 9, 9, 9, 9, 9], 4)
    ).toBeTruthy();
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBeTruthy();
  });
});
