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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) {
    return head;
  }

  const preHead = new ListNode(0);
  preHead.next = head;
  let listLength = 0;
  let pre = preHead;
  while (pre.next) {
    pre = pre.next;
    listLength++;
  }

  let kRotateLeft = listLength - (k % listLength);
  pre.next = head;
  while (kRotateLeft > 0) {
    pre = pre.next;
    kRotateLeft--;
  }

  head = pre.next;
  pre.next = null;
  return head;
};

export { rotateRight };
