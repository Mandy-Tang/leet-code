import ListNode from "../utils/ListNode";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  const preHeadInNew = new ListNode();
  let curNodeInOld = head;
  while (curNodeInOld) {
    let nextNodeInNew = preHeadInNew.next;
    preHeadInNew.next = curNodeInOld;
    curNodeInOld = curNodeInOld.next;
    preHeadInNew.next.next = nextNodeInNew;
  }

  return preHeadInNew.next;
};

export { reverseList };
