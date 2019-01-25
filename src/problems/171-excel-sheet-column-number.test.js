import titleToNumber from "./171-excel-sheet-column-number";

describe("Excel Sheet Column to number", () => {
  it("should return the right number given the sheet column ", () => {
    expect(titleToNumber("A")).toBe(1);
    expect(titleToNumber("AA")).toBe(27);
    expect(titleToNumber("ZY")).toBe(701);
  });
});
