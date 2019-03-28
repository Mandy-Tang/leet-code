/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//   const result = [];
//   if (!root) {
//     return result;
//   }

//   let temp = [];
//   temp.push(root);
//   while (temp.length !== 0) {
//     let currentLevel = temp.splice(0, temp.length);
//     let currentLevelValue = [];
//     currentLevel.forEach(treeNode => {
//       currentLevelValue.push(treeNode.val);
//       if (treeNode.left) {
//         temp.push(treeNode.left);
//       }
//       if (treeNode.right) {
//         temp.push(treeNode.right);
//       }
//     });
//     result.push(currentLevelValue);
//   }

//   return result;
// };
var levelOrder = function(root) {
  const result = [];
  if (!root) {
    return result;
  }

  const dst = (tree, level, result) => {
    if (!tree) {
      return;
    }
    if (!result[level]) {
      result[level] = [];
    }
    result[level].push(tree.val);
    dst(tree.left, level + 1, result);
    dst(tree.right, level + 1, result);
  };

  dst(root, 0, result);

  return result;
};

export { levelOrder };
