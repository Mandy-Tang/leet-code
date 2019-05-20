import { fib } from "./509-fibonacci-number";

describe("fibonacci number", () => {
  it("should return the expected value", () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
  });
});
