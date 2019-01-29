import myAtoi from "./8-string-to-integer-atoi";

describe("String to Integer Atoi", () => {
  it("should return 0 if the entire string just contain empty", () => {
    expect(myAtoi("        ")).toBe(0);
  });

  it("should return 0 if the first no-empty string is not a number", () => {
    expect(myAtoi("words and 987")).toBe(0);
  });

  it("should return the expected integer", () => {
    expect(myAtoi("   -42")).toBe(-42);
    expect(myAtoi("  42")).toBe(42);
    expect(myAtoi("4193 with words")).toBe(4193);
  });

  it("should return the max or min value if the number is is out of the range of a 32-bit signed integer.", () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
    expect(myAtoi("99283472332")).toBe(Math.pow(2, 31) - 1);
  });
});
