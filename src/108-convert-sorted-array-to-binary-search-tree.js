import TreeNode from "./utils/TreeNode";
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  if (nums.constructor.name !== "Array") {
    return;
  }

  if (nums.length === 0) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);
  const resultedTree = new TreeNode(nums[mid]);
  resultedTree.left = sortedArrayToBST(nums.slice(0, mid));
  resultedTree.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  return resultedTree;
};

export default sortedArrayToBST;
