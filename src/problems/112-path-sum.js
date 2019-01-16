/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  const resultSet = new Set();
  calculateSum(root, 0, resultSet);
  console.log(resultSet);

  return resultSet.has(sum);
};

const calculateSum = (tree, currentSum, resultSet) => {
  if (!tree) {
    return;
  }

  const leafSum = tree.val + currentSum;

  if (!tree.left && !tree.right) {
    resultSet.add(leafSum);
    return;
  }

  calculateSum(tree.left, leafSum, resultSet);
  calculateSum(tree.right, leafSum, resultSet);
};

export default hasPathSum;
