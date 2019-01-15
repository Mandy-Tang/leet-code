/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

export default maxDepth;
