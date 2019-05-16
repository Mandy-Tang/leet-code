import { findDisappearedNumbers } from "./448-find-all-numbers-disappeared-in-an-array";

describe("find all numbers disappeared in an array", () => {
  it("should return the disappeared numbers correctly", () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });
});
