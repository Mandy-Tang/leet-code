/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const result = [];
  levelOrder(root, 0, result);
  return result.reverse();
};

const levelOrder = (tree, level, result) => {
  if (!tree) {
    return;
  }

  if (result[level] === undefined) {
    result[level] = [];
  }

  result[level].push(tree.val);

  levelOrder(tree.left, level + 1, result);
  levelOrder(tree.right, level + 1, result);
};

export default levelOrderBottom;
