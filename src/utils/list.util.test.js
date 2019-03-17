import { createList, readList } from "./list.util";

describe("list utils", () => {
  it("should create and read node list correctly", () => {
    expect(readList(createList([]))).toEqual([]);
    expect(readList(createList([1]))).toEqual([1]);
    expect(readList(createList([1, 2, 3, 4]))).toEqual([1, 2, 3, 4]);
  });
});
