import generate from "./118-pascals-triangle";

describe("Pascals Triangle", () => {
  it("should return undefined if the given number is not a number", () => {
    expect(generate("222")).toBeUndefined();
    expect(generate()).toBeUndefined();
    expect(generate(-9)).toBeUndefined();
  });
  it("should return an empty array if the given number is 0", () => {
    expect(generate(0)).toEqual([]);
  });

  it("should return [1] if the given number is 1", () => {
    expect(generate(1)).toEqual([[1]]);
  });

  it("should return the pascal triangle correctly using the given number", () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
    expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    expect(generate(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  });
});
