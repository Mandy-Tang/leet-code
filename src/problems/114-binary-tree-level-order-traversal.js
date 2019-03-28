/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let pre = null;

  const _flatten = tree => {
    if (!tree) {
      return;
    }
    _flatten(tree.right);
    _flatten(tree.left);
    tree.right = pre;
    tree.left = null;
    pre = tree;
  };

  _flatten(root, null);
};

export { flatten };
