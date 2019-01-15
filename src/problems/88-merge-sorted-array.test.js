import { merge } from "./88-merge-sorted-array";

describe("Merge Sorted Array", () => {
  it("should merge the second array to the first array", () => {
    const arrayA = [1, 3, 5, 0, 0, 0];
    const arrayB = [2, 4, 6];
    merge(arrayA, 3, arrayB, 3);
    expect(arrayA).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should merge the second array to the first array correctly if all elements in the second array are larger than elements in the first array", () => {
    const arrayA = [1, 2, 3, 0, 0, 0];
    const arrayB = [4, 5, 6];
    merge(arrayA, 3, arrayB, 3);
    expect(arrayA).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should merge the second array to the first array correctly if all elements in the second array are smaller than elements in the first array", () => {
    const arrayA = [4, 5, 6, 0, 0, 0];
    const arrayB = [1, 2, 3];
    merge(arrayA, 3, arrayB, 3);
    expect(arrayA).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
