import { uniquePaths } from "./62-unique-paths";

describe("uniquePaths", () => {
  it("should return the unique paths number correctly", () => {
    expect(uniquePaths(7, 1)).toBe(1);
    expect(uniquePaths(1, 9)).toBe(1);
    expect(uniquePaths(7, 2)).toBe(7);
  });
});
