import { ListNode, addTwoNumbers } from "./add-two-numbers";

describe("add two numbers", () => {
  it("should add the given two numbers and return it as a link", () => {
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

  it("should return correct answer when the length of the two given numbers is not the same ", () => {
    const givenA1 = new ListNode(2);

    const givenB1 = new ListNode(5);
    const givenB2 = new ListNode(6);
    const givenB3 = new ListNode(4);
    givenB1.next = givenB2;
    givenB2.next = givenB3;

    const exactResult = addTwoNumbers(givenA1, givenB1);

    expect(exactResult.val).toBe(7);
    expect(exactResult.next.val).toBe(6);
    expect(exactResult.next.next.val).toBe(4);
  });

  it("should return correct answer when given arguments contains null", () => {
    const givenA1 = null;

    const givenB1 = new ListNode(5);
    const givenB2 = new ListNode(6);
    const givenB3 = new ListNode(4);
    givenB1.next = givenB2;
    givenB2.next = givenB3;

    const exactResult = addTwoNumbers(givenA1, givenB1);

    expect(exactResult.val).toBe(5);
    expect(exactResult.next.val).toBe(6);
    expect(exactResult.next.next.val).toBe(4);
  });

  it("should return the correct answer when there is curry in the last node", () => {
    const givenA1 = new ListNode(2);
    const givenA2 = new ListNode(4);
    const givenA3 = new ListNode(5);
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
    expect(exactResult.next.next.val).toBe(0);
    expect(exactResult.next.next.next.val).toBe(1);
  });
});
