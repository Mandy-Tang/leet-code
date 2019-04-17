/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) {
    return true;
  }

  return isEqual(root, root.val);
};

function isEqual(tree, val) {
  if (!tree) {
    return true;
  }

  return (
    tree.val === val && isEqual(tree.left, val) && isEqual(tree.right, val)
  );
}

export { isUnivalTree };
