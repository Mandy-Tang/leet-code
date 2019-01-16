/**
 * recursive approach
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.val === sum;
  }

  return (
    hasPathSum(root.right, sum - root.val) ||
    hasPathSum(root.left, sum - root.val)
  );
};

/**
 * DFS iteration
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// const hasPathSumUsingDFS = function(root, sum) {
//   if (root === null) {
//     return false;
//   }

//   const stack = [];
//   stack.push({tree: root, sum: sum});
//   while(stack.length !== 0) {
//     const {tree: currentTree, sum} = stack.pop();
//     if (!currentTree.left && !currentTree.right) {
//       if (currentTree.val === sum) {
//         return true;
//       }
//     } else {
//       if (currentTree.left) {
//         stack.push({tree: currentTree.left, sum: sum - currentTree.val})
//       }
//       if (currentTree.right) {
//         stack.push({tree: currentTree.right, sum: sum - currentTree.val});
//       }

//     }
//   }
//   return false;
// };
export default hasPathSum;
