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

  return sortedArrayWithIndex(nums, 0, nums.length - 1);
};

const sortedArrayWithIndex = (nums, startIndex, endIndex) => {
  if (startIndex > endIndex) {
    return null;
  }
  if (startIndex === endIndex) {
    return new TreeNode(nums[startIndex]);
  }
  const mid = Math.floor((startIndex + endIndex + 1) / 2);
  const result = new TreeNode(nums[mid]);
  result.left = sortedArrayWithIndex(nums, startIndex, mid - 1);
  result.right = sortedArrayWithIndex(nums, mid + 1, endIndex);
  return result;
};

export default sortedArrayToBST;
