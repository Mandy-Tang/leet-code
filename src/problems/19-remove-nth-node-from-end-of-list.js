import ListNode from "../utils/ListNode";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) {
    return head;
  }

  const preHead = new ListNode(0);
  preHead.next = head;

  let length = 0;
  let pre = preHead.next;
  while (pre) {
    length++;
    pre = pre.next;
  }

  const nthFromStart = length - n + 1;

  let preNode = preHead;
  let currentNode = preNode.next;
  let current = 1;
  while (nthFromStart > current) {
    preNode = currentNode;
    currentNode = preNode.next;
    current++;
  }

  preNode.next = currentNode.next;
  currentNode.next = null;

  return preHead.next;
};

export { removeNthFromEnd };
