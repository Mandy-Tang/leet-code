import { createList, readList } from "../utils/list.util";
import { removeNthFromEnd } from "./19-remove-nth-node-from-end-of-list";
describe("remove the nth node from the end of the list and return the list head", () => {
  it("should return the list correctly", () => {
    const testedList = createList([1, 2, 4, 5]);
    const result = removeNthFromEnd(testedList, 2);
    const expectedRessult = createList([1, 2, 5]);
    expect(readList(result)).toEqual(readList(expectedRessult));
  });
});
