import { moveZeroes } from "./283-move-zeroes";

describe("move zeros", () => {
  it("should move all zeros to the end in place", () => {
    const testedArray = [1, 0, 3, 0, 5, 7, 0];
    moveZeroes(testedArray);
    expect(testedArray).toEqual([1, 3, 5, 7, 0, 0, 0]);
  });
});
