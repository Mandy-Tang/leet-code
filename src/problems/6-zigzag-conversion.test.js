import convert from "./6-zigzag-conversion";

describe("Zigzag conversion", () => {
  it("should return the right string using zigzag", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });
});
