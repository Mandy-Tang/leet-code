import ListNode from "../utils/ListNode";
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const preHead = new ListNode(0);
  preHead.next = head;

  let pre = preHead,
    cur = head;
  while (cur) {
    if (cur.val !== val) {
      pre = cur;
      cur = cur.next;
    } else {
      pre.next = cur.next;
      cur = cur.next;
    }
  }

  return preHead.next;
};

export { removeElements };
