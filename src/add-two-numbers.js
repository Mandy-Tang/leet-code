/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let curry = 0;
  let listNode1 = l1,
    listNode2 = l2;
  let preNode = new ListNode(0);
  let result = preNode;

  while ((listNode1 && listNode2) || curry > 0) {
    const val1 = listNode1 ? listNode1.val : 0;
    const val2 = listNode2 ? listNode2.val : 0;
    const sum = val1 + val2 + curry;
    curry = Math.floor(sum / 10);
    const currentValue = curry ? sum - 10 : sum;
    preNode.next = new ListNode(currentValue);

    preNode = preNode.next;
    listNode1 = listNode1 ? listNode1.next : null;
    listNode2 = listNode2 ? listNode2.next : null;
  }

  if (listNode1) {
    preNode.next = listNode1;
  } else if (listNode2) {
    preNode.next = listNode2;
  }

  return result.next;
};

export { ListNode, addTwoNumbers };
