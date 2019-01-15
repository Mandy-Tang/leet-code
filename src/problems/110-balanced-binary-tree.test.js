import TreeNode from "../utils/TreeNode";
import { isBalanced } from "./110-balanced-binary-tree";

describe("Balanced Binary Tree", () => {
  it("should return true if the given tree is null", () => {
    expect(isBalanced(null)).toBeTruthy();
  });

  it("should return true if the given tree is just a single node ", () => {
    expect(isBalanced(new TreeNode(1))).toBeTruthy();
  });

  it("should return ture if the given tree is a balanced binary tree", () => {
    const testedTree = new TreeNode(1);
    testedTree.left = new TreeNode(1);
    testedTree.right = new TreeNode(2);
    testedTree.left.left = new TreeNode(3);

    expect(isBalanced(testedTree)).toBeTruthy();
  });

  it("should return false if the given tree is a balanced binary tree", () => {
    const testedTree = new TreeNode(1);
    testedTree.left = new TreeNode(1);
    testedTree.right = new TreeNode(2);
    testedTree.left.left = new TreeNode(3);
    testedTree.left.left.left = new TreeNode(1);

    expect(isBalanced(testedTree)).toBeFalsy();
  });
});
