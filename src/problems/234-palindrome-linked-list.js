/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null) {
    return true;
  }

  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }

  const length = values.length;
  const mid = Math.floor((length - 1) / 2);

  for (let i = 0; i < mid + 1; i++) {
    if (values[i] !== values[length - 1 - i]) {
      return false;
    }
  }

  return true;
};

export { isPalindrome };
