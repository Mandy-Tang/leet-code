import { intersection } from "./349-intersection-of-two-arrays";

describe("find the intersection of the two given array", () => {
  it("should return the intersection of the two given array", () => {
    expect(intersection([1, 2, 3, 4], [2, 3])).toEqual([2, 3]);
    expect(intersection([1, 2, 3, 4], [])).toEqual([]);
  });
});
