import { deleteDuplicates } from "./83-remove-duplicates-from-sorted-list";
import ListNode from "./utils/ListNode";

describe("Remove Duplicates from sorted List", () => {
  it("should return null if there is no given list", () => {
    expect(deleteDuplicates()).toBeNull();
  });
  it("should remove the dulicates from the given sorted list", () => {
    const testNode = new ListNode(1);
    const a = new ListNode(1);
    const b = new ListNode(2);
    const c = new ListNode(2);
    const d = new ListNode(4);
    testNode.next = a;
    a.next = b;
    b.next = c;
    c.next = d;

    const result = deleteDuplicates(testNode);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(2);
    expect(result.next.next.val).toBe(4);
    expect(result.next.next.next).toBeNull();
  });
});
