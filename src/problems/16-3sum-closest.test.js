import { threeSumClosest } from "./16-3sum-closest";

describe("threeSumClosest", () => {
  test("should return undefined if the given parameters are invalid", () => {
    expect(threeSumClosest("", "")).toBeUndefined();
    expect(threeSumClosest([], "")).toBeUndefined();
  });

  test("should return undefined if the given array length is less than 3", () => {
    expect(threeSumClosest([1, 2], 2)).toBeUndefined();
  });

  test.skip("should return the three number closest to the given sum", () => {
    expect(threeSumClosest([2, 1, 4], 4)).toEqual(7);
    expect(threeSumClosest([2, 1, 3, 4], 5)).toEqual(6);
    expect(threeSumClosest([4, 3, 1, 7, 9], 5)).toEqual(8);
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toEqual(2);
  });
});
