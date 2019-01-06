import { hello } from "./0-hello-world";

describe("hello", () => {
  it("should return world", () => {
    expect(hello()).toBe("world");
  });
});
