import getIntersectionNode from "./160-intersection-of-two-linked-lists";
import ListNode from "../utils/ListNode";

describe("Intersection of two linked lists", () => {
  it("should return null if any of the given linked list is null", () => {
    expect(getIntersectionNode(null, null)).toBe(null);
    expect(getIntersectionNode(new ListNode(1), null)).toBeNull();
    expect(getIntersectionNode(null, new ListNode(2))).toBeNull();
  });
  it("should return null if the given two linked lists do not have intersection", () => {
    const testedListA = new ListNode(1);
    testedListA.next = new ListNode(2);
    testedListA.next.next = new ListNode(3);

    const testedListB = new ListNode(1);
    testedListB.next = new ListNode(2);

    expect(getIntersectionNode(testedListA, testedListB)).toBeNull();
  });

  it("should return the intersected node it the given two linked lists have interseciton", () => {
    const intersectedNode = new ListNode(3);
    intersectedNode.next = new ListNode(4);
    intersectedNode.next.next = new ListNode(5);
    const testedListA = new ListNode(1);
    testedListA.next = new ListNode(2);
    testedListA.next.next = intersectedNode;

    const testedListB = new ListNode(1);
    testedListB.next = intersectedNode;

    expect(getIntersectionNode(testedListA, testedListB)).toBe(intersectedNode);
  });
});
