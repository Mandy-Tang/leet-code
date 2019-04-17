import { createList, readList } from "../utils/list.util";
import { rotateRight } from "./61-rotate-list";

describe("rotate the given list to the right by the given number", () => {
  it("should rotate the given list correctly", () => {
    const testedList = createList([1, 2, 3, 4, 5]);
    const testedResult = rotateRight(testedList, 2);
    const expectedResult = createList([4, 5, 1, 2, 3]);
    expect(readList(testedResult)).toEqual(readList(expectedResult));
  });
});
