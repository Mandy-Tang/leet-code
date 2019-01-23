import twoSum from "./167-two-sum-ii-input-array-is-sorted";

describe("Two sum when input array is sorted", () => {
  it("should return the index of the two number", () => {
    expect(twoSum([1, 2, 5, 7], 9)).toEqual([2, 4]);
  });
});
