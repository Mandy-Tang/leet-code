/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
  if (root === null) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }

  if (root.left) {
    return minDepth(root.left) + 1;
  }

  return minDepth(root.right) + 1;
};

export default minDepth;
