import findMedianSortedArrays from "./4-median-of-two-sorted-arrays";

describe("findMedianSortedArrays", () => {
  it("should return the median value of two given array correctly", () => {
    expect(findMedianSortedArrays(20, [2])).toEqual(undefined);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
    expect(findMedianSortedArrays([1, 2, 3], [])).toEqual(2);
    expect(findMedianSortedArrays([1, 2, 2, 3], [2, 9])).toEqual(2);
    expect(findMedianSortedArrays([1, 3, 5, 7, 9], [2])).toEqual(4);
  });
});
