import hasPathSum from "./112-path-sum";
import TreeNode from "../utils/TreeNode";

describe("Has Path Sum", () => {
  it("should return false if the given tree is null", () => {
    expect(hasPathSum(null, 0)).toBeFalsy();
  });

  it("should return true if the given tree has a path matches the given sum", () => {
    const testedTree = new TreeNode(1);
    testedTree.left = new TreeNode(2);
    testedTree.right = new TreeNode(3);
    testedTree.right.right = new TreeNode(4);
    expect(hasPathSum(testedTree, 3)).toBeTruthy();
  });

  it("should return false if the given tree doee not have a path mathced the given sum", () => {
    const testedTree = new TreeNode(1);
    testedTree.left = new TreeNode(2);
    testedTree.left.left = new TreeNode(3);
    testedTree.right = new TreeNode(4);
    expect(hasPathSum(testedTree, 3)).toBeFalsy();
  });
});
