import rotate from "./189-rotate-array";

describe("Rotate Array", () => {
  it("should return an empty array if the given array is empty", () => {
    const testArray = [];
    rotate(testArray, 5);
    expect(testArray).toEqual([]);
  });
  it("should ratate the array correctly", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7];
    rotate(testArray, 3);
    expect(testArray).toEqual([5, 6, 7, 1, 2, 3, 4]);

    const testArrayA = [-1, -100, 3, 99];
    rotate(testArrayA, 2);
    expect(testArrayA).toEqual([3, 99, -1, -100]);
  });
});
