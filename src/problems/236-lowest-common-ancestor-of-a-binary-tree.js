/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
  let result = null;

  var _check = function(root, p, q) {
    if (!root) {
      return false;
    }
    const left = _check(root.left, p, q);
    const right = _check(root.right, p, q);
    const self = root === p || root === q;
    if (!result && left + right + self >= 2) {
      result = root;
    }
    return left || right || self;
  };

  _check(root, p, q);

  return result;
};

export { lowestCommonAncestor };
