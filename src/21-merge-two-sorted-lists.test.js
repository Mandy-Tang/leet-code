import { ListNode, mergeTwoLists } from "./21-merge-two-sorted-lists";

describe("mergeTwoLists", () => {
  it("should return the sorted merge lists correctly", () => {
    const givenA1 = new ListNode(1);
    const givenA2 = new ListNode(3);
    const givenA3 = new ListNode(6);
    givenA1.next = givenA2;
    givenA2.next = givenA3;

    const givenB1 = new ListNode(2);
    const givenB2 = new ListNode(4);
    const givenB3 = new ListNode(5);
    givenB1.next = givenB2;
    givenB2.next = givenB3;

    const exactResult = mergeTwoLists(givenA1, givenB1);

    expect(exactResult.val).toBe(1);
    expect(exactResult.next.val).toBe(2);
    expect(exactResult.next.next.val).toBe(3);
    expect(exactResult.next.next.next.val).toBe(4);
    expect(exactResult.next.next.next.next.val).toBe(5);
    expect(exactResult.next.next.next.next.next.val).toBe(6);
  });
});
