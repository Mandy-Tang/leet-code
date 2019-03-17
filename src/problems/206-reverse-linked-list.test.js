import { createList, readList } from "../utils/list.util";
import { reverseList } from "./206-reverse-linked-list";

describe("reverse linked list", () => {
  fit("should reverse linked list correctly", () => {
    const testedList = createList([1, 2, 3, 4, 5]);
    const testedResult = reverseList(testedList);
    expect(readList(testedResult)).toEqual([5, 4, 3, 2, 1]);
  });
});
