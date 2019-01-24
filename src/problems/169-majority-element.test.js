import majorityElement from "./169-majority-element";

describe("Majority element", () => {
  it("should return the majority element when given an array", () => {
    expect(majorityElement([2, 2, 3, 3, 3])).toBe(3);
  });
});
