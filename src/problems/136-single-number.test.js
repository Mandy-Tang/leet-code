import singleNumber from "./136-single-number";

describe("Single Number", () => {
  it("should return the single number correctly", () => {
    expect(singleNumber([1, 1, 2])).toBe(2);
  });

  it("should return 0 if it can not find the single number", () => {
    expect(singleNumber([1, 1])).toBe(0);
  });
});
