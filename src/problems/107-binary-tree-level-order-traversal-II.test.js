import TreeNode from "../utils/TreeNode";
import levelOrderBottom from "./107-binary-tree-level-order-traversal-II";
describe("Binary tree level order traversal", () => {
  it("should return [] if the given tree is null", () => {
    expect(levelOrderBottom(null)).toEqual([]);
  });

  it("should return the right level order traversal", () => {
    const testedTree = new TreeNode(3);
    testedTree.left = new TreeNode(9);
    testedTree.left.left = new TreeNode(1);
    testedTree.right = new TreeNode(20);
    testedTree.right.left = new TreeNode(15);
    testedTree.right.right = new TreeNode(7);

    expect(levelOrderBottom(testedTree)).toEqual([[1, 15, 7], [9, 20], [3]]);
  });
});
