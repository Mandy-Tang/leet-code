import { createList, readList } from "../utils/list.util";
import { removeElements } from "./203-remove-linked-list-elements";
describe("remove linked list elements", () => {
  it("should return the linked list without the given elements", () => {
    const testedList = createList([1, 2, 5, 6, 4, 6]);
    const testedResult = removeElements(testedList, 6);
    expect(readList(testedResult)).toEqual([1, 2, 5, 4]);
  });
});
