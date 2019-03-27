import TreeNode from "../utils/TreeNode";
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if (preorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  let i = 1;
  while (preorder[i] < preorder[0]) {
    i++;
  }

  const leftPreorder = preorder.slice(1, i);
  const rightPreorder = preorder.slice(i);

  root.left = bstFromPreorder(leftPreorder);
  root.right = bstFromPreorder(rightPreorder);

  return root;
};

export { bstFromPreorder };
