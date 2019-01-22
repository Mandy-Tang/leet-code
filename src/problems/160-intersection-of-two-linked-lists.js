/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  const listSetA = new Set();
  let currentNode = headA;
  while (currentNode) {
    listSetA.add(currentNode);
    currentNode = currentNode.next;
  }

  currentNode = headB;
  while (currentNode) {
    if (listSetA.has(currentNode)) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }

  return null;
};

export default getIntersectionNode;
