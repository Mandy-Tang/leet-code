import ListNode from "./ListNode";

export const createList = nums => {
  const length = nums.length;
  if (length === 0) {
    return;
  }

  const preHead = new ListNode();
  let curNode = preHead;
  for (let i = 0; i < length; i++) {
    curNode.next = new ListNode(nums[i]);
    curNode = curNode.next;
  }

  return preHead.next;
};

export const readList = lists => {
  const result = [];
  let cur = lists;
  while (cur) {
    result.push(cur.val);
    cur = cur.next;
  }
  return result;
};
