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
const mergeTwoLists = function(l1, l2) {
  let preNode = new ListNode(0);
  let result = preNode;
  for (let i = l1, j = l2; i !== null || j !== null; ) {
    if (i === null) {
      preNode.next = new ListNode(j.val);
      j = j.next;
    } else if (j === null) {
      preNode.next = new ListNode(i.val);
      i = i.next;
    } else if (i.val < j.val) {
      preNode.next = new ListNode(i.val);
      i = i.next;
    } else {
      preNode.next = new ListNode(j.val);
      j = j.next;
    }
    preNode = preNode.next;
  }

  return result.next;
};

export { ListNode, mergeTwoLists };
