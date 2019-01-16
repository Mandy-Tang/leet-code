import getRow from "./119-pascals-triangle-ii";

describe("pascals trangle II", () => {
  it("should reeturn undefined if the given number is invalid", () => {
    expect(getRow()).toBeUndefined();
    expect(getRow("")).toBeUndefined();
    expect(getRow(-1)).toBeUndefined();
  });
  it("should return [1] if the given number is 0", () => {
    expect(getRow(0)).toEqual([1]);
  });

  it("should return the right row according to the given number", () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });
});
