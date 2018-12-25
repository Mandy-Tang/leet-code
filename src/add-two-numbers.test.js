/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

import { ListNode, addTwoNumbers } from "./add-two-numbers";

describe("add two numbers", () => {
  it("should should add the given two numbers and return it as a link", () => {
    const givenA1 = new ListNode(2);
    const givenA2 = new ListNode(4);
    const givenA3 = new ListNode(3);
    givenA1.next = givenA2;
    givenA2.next = givenA3;

    const givenB1 = new ListNode(5);
    const givenB2 = new ListNode(6);
    const givenB3 = new ListNode(4);
    givenB1.next = givenB2;
    givenB2.next = givenB3;

    const exactResult = addTwoNumbers(givenA1, givenB1);

    expect(exactResult.val).toBe(7);
    expect(exactResult.next.val).toBe(0);
    expect(exactResult.next.next.val).toBe(8);
  });
});
