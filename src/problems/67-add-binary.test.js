import { addBinary } from "./67-add-binary";

describe("Add Binary", () => {
  it("should return the sum of two binary string", () => {
    expect(addBinary("1", "1")).toBe("10");
    expect(addBinary("101", "0")).toBe("101");
    expect(addBinary("10", "111")).toBe("1001");
  });
});
