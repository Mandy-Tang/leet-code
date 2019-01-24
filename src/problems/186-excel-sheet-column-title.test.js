import convertToTitle from "./186-excel-sheet-column-title";

describe("Excel Sheet Column title ", () => {
  it("should conver the number to the right excel sheet column title", () => {
    expect(convertToTitle(1)).toBe("A");
    expect(convertToTitle(28)).toBe("AB");
    expect(convertToTitle(701)).toBe("ZY");
  });
});
