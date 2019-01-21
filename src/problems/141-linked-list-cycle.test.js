import ListNode from "../utils/ListNode";
import hasCycle from "./141-linked-list-cycle";

describe("Linked List Cycle", () => {
  it("should return false if the given listNode is null", () => {
    expect(hasCycle(null)).toBeFalsy();
  });

  it("should return false if the given listNode is a signle node", () => {
    expect(hasCycle(new ListNode(1))).toBeFalsy();
  });

  it("should return false if there is no circle", () => {
    const testedList = new ListNode(1);
    testedList.next = new ListNode(2);
    testedList.next.next = new ListNode(3);
    expect(hasCycle(testedList)).toBeFalsy();
  });

  it("should return true if there is circle", () => {
    const testedList = new ListNode(1);
    testedList.next = new ListNode(2);
    testedList.next.next = new ListNode(3);
    testedList.next.next.next = testedList.next;

    expect(hasCycle(testedList)).toBeTruthy();
  });
});
