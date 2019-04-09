import { peakIndexInMountainArray } from "./852-peak-index-in-a-mountain-array";

describe("peak index in a mountain array", () => {
  it("should return the peak index", () => {
    // expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
    expect(peakIndexInMountainArray([3, 4, 5, 1])).toBe(2);
  });
});
