import { isValid } from "./20-valid-parentheses";

describe("isValid", () => {
  it("should return undefined if the given string is not valid", () => {
    expect(isValid("df(")).toBeUndefined();
  });

  it("should return true if the given string is empty", () => {
    expect(isValid("")).toBeTruthy();
  });

  it("should judge the validation of the given string correctly", () => {
    expect(isValid("()")).toBeTruthy();
    expect(isValid("{[]}()")).toBeTruthy();
    expect(isValid("({)}")).toBeFalsy();
  });
});
