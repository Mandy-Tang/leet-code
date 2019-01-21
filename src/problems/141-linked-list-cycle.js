/**
 * Hash Map Approach
 * @param {ListNode} head
 * @return {boolean}
 */
// const hasCycle = function(head) {
//   const visitedSet = new Set();
//   let currentNode = head;
//   while(currentNode) {
//     if (visitedSet.has(currentNode)) {
//       return true;
//     }
//     visitedSet.add(currentNode);
//     currentNode = currentNode.next;
//   }
//   return false;

// };

/**
 * two pointer approach
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
  if (head === null) {
    return false;
  }

  if (head.next === null) {
    return false;
  }

  let slowNode = head;
  let fastNode = head.next;
  while (slowNode !== fastNode) {
    if (fastNode === null || fastNode.next === null) {
      return false;
    }
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }

  return true;
};

export default hasCycle;
