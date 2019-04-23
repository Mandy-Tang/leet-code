import { intersect } from "./350-intersection-of-two-arrays-ii";

describe("intersection of two arrays ii", () => {
  it("should return the intersection of the given two array and keep the appear", () => {
    expect(intersect([1, 2, 2, 4, 9], [1, 2, 2, 3])).toEqual([1, 2, 2]);
  });
});
