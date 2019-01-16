/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.val === sum;
  }

  return (
    hasPathSum(root.right, sum - root.val) ||
    hasPathSum(root.left, sum - root.val)
  );
};

export default hasPathSum;
