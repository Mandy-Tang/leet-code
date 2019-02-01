import isMatch from "./10-regular-expression-matching";

describe("Regular Expression matching", () => {
  it("should return ture if the given string mathc the pattern, otherwise reture false", () => {
    expect(isMatch("ddddxc", "ddddxc")).toBeTruthy();
    expect(isMatch("ddddxc", "d*xc")).toBeTruthy();
    expect(isMatch("ddddxc", "d*.c")).toBeTruthy();
    expect(isMatch("ddddxc", "d*x")).toBeFalsy();
    expect(isMatch("ddddxcddd", "d*dxcd*")).toBeTruthy();
    expect(isMatch("dddxcda", "d*.xc.")).toBeFalsy();
  });
});
