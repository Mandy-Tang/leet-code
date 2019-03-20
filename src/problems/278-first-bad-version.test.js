import { solution } from "./278-first-bad-version";

describe("Find the first bad version", () => {
  it("should return the first bad version correctly", () => {
    const isBadVersion = num => {
      return num === 4;
    };

    expect(solution(isBadVersion)(5)).toBe(4);
  });
});
