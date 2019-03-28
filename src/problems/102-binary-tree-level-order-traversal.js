/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  if (!root) {
    return result;
  }

  let temp = [];
  temp.push(root);
  while (temp.length !== 0) {
    let currentLevel = temp.splice(0, temp.length);
    let currentLevelValue = [];
    currentLevel.forEach(treeNode => {
      currentLevelValue.push(treeNode.val);
      if (treeNode.left) {
        temp.push(treeNode.left);
      }
      if (treeNode.right) {
        temp.push(treeNode.right);
      }
    });
    result.push(currentLevelValue);
  }

  return result;
};

export { levelOrder };
