import { search } from "./81-search-in-rotated-sorted-array-ii";

describe("search in rotated sorted array", () => {
  it("should return true if the target is in the given array and false if not", () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBeTruthy();
    expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toBeFalsy();
    expect(search([], 3)).toBeFalsy();
  });
});
