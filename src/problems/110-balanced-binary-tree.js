const UNBALANCED = "UNBALANCED";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = function(root) {
  const treeHeight = getHeight(root);
  return treeHeight !== UNBALANCED;
};

const getHeight = tree => {
  if (tree === null) {
    return 0;
  }

  const leftChildHeight = getHeight(tree.left);
  const rightChildHeight = getHeight(tree.right);

  if (
    leftChildHeight === UNBALANCED ||
    rightChildHeight === UNBALANCED ||
    Math.abs(leftChildHeight - rightChildHeight) > 1
  ) {
    return UNBALANCED;
  }

  return Math.max(leftChildHeight, rightChildHeight) + 1;
};

export { isBalanced };
