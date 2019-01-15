/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (root === null) {
    return true;
  }
  return isSymmetricSame(root.left, root.right);
};

const isSymmetricSame = (treeA, treeB) => {
  if (treeA === null && treeB === null) {
    return true;
  }
  if (treeA && treeB) {
    return (
      treeA.val === treeB.val &&
      isSymmetricSame(treeA.left, treeB.right) &&
      isSymmetricSame(treeA.right, treeB.left)
    );
  }
  return false;
};

export { isSymmetric };
