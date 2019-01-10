import { isSymmetric } from "./101-symmetric-tree";
import TreeNode from "./utils/TreeNode";

describe("Symmetric Treed", () => {
  it("should return true if given tree is null", () => {
    expect(isSymmetric(null)).toBeTruthy();
  });

  it("should return true if the given tree is symmetric same", () => {
    const testedData = new TreeNode(1);
    const testedLeftChild = new TreeNode(2);
    testedLeftChild.left = new TreeNode(3);
    testedLeftChild.right = new TreeNode(4);
    testedData.left = testedLeftChild;

    const testedRightChild = new TreeNode(2);
    testedRightChild.left = new TreeNode(4);
    testedRightChild.right = new TreeNode(3);
    testedData.right = testedRightChild;

    expect(isSymmetric(testedData)).toBeTruthy();
  });

  it("should return false if the give tree is not symmetric", () => {
    const testedData = new TreeNode(1);
    const testedLeftChild = new TreeNode(2);
    testedLeftChild.right = new TreeNode(3);
    testedData.left = testedLeftChild;

    const testedRightChild = new TreeNode(2);
    testedRightChild.right = new TreeNode(3);
    testedData.right = testedRightChild;

    expect(isSymmetric(testedData)).toBeFalsy();
  });
});
