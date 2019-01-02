import { romanToInt } from "./roman-to-integer";

describe("romanToInt", () => {
  it("should return undefined if the input is not a legal parameter", () => {
    expect(romanToInt(1)).toBeUndefined();
    expect(romanToInt(true)).toBeUndefined();
    expect(romanToInt("IB")).toBeUndefined();
  });
  it("should convert roman to integer correctly", () => {
    expect(romanToInt("I")).toBe(1);
    expect(romanToInt("V")).toBe(5);
    expect(romanToInt("X")).toBe(10);
    expect(romanToInt("L")).toBe(50);
    expect(romanToInt("C")).toBe(100);
    expect(romanToInt("D")).toBe(500);
    expect(romanToInt("M")).toBe(1000);

    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);

    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("DCCCXV")).toBe(815);
    expect(romanToInt("CMLXXV")).toBe(975);
  });
});
