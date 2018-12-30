import { reverse } from "./reverse-integer.js";

describe("reverse", () => {
  it("should reverse integer correctly", () => {
    expect(reverse(0)).toEqual(0);
    expect(reverse(123)).toEqual(321);
    expect(reverse(-34)).toEqual(-43);
    expect(reverse(10)).toEqual(1);
    expect(reverse(1534236469)).toEqual(0);
  });
});
