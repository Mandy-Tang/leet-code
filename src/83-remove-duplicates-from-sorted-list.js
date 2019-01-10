import ListNode from "./utils/ListNode";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  if (!head) {
    return null;
  }

  let preNode = new ListNode(head.val);
  let resultNode = preNode;
  let curNode = head.next;

  while (curNode) {
    if (curNode.val === preNode.val) {
      curNode = curNode.next;
    } else {
      preNode.next = new ListNode(curNode.val);
      preNode = preNode.next;
      curNode = curNode.next;
    }
  }

  return resultNode;
};

export { deleteDuplicates };
