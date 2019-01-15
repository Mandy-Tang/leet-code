import { hello } from "./hello-world";

describe("hello", () => {
  it("should return world", () => {
    expect(hello()).toBe("world");
  });
});
