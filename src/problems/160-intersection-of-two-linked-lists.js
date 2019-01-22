/** using hash Map
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// const getIntersectionNode = function(headA, headB) {
//   if (!headA || !headB) {
//     return null;
//   }

//   const listSetA = new Set();
//   let currentNode = headA;
//   while (currentNode) {
//     listSetA.add(currentNode);
//     currentNode = currentNode.next;
//   }

//   currentNode = headB;
//   while (currentNode) {
//     if (listSetA.has(currentNode)) {
//       return currentNode;
//     }
//     currentNode = currentNode.next;
//   }

//   return null;
// };

/** using two pointer
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) {
    return null;
  }

  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA ? pointerA : null;
};

export default getIntersectionNode;
