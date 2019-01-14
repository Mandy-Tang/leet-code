import isSameTree from "./is-same-tree";
import TreeNode from "../utils/TreeNode";

describe("is same tree", () => {
  it("should return ture if both given tree are null", () => {
    expect(isSameTree(null, null)).toBeTruthy();
  });

  it("should return false if any of the given tree is undefined", () => {
    expect(isSameTree(new TreeNode(0), undefined)).toBeFalsy();
    expect(isSameTree(undefined, undefined)).toBeFalsy();
  });

  it("should return true if the given two trees are the same", () => {
    const testedA = new TreeNode(1);
    testedA.left = new TreeNode(2);
    testedA.right = new TreeNode(3);

    const testedB = new TreeNode(1);
    testedB.left = new TreeNode(2);
    testedB.right = new TreeNode(3);

    expect(isSameTree(testedA, testedB)).toBeTruthy();
  });

  it("should return false if the given two trees are not the same", () => {
    const testedA = new TreeNode(1);
    testedA.left = new TreeNode(2);
    testedA.right = new TreeNode(3);
    testedA.left.left = new TreeNode(4);

    const testedB = new TreeNode(1);
    testedB.left = new TreeNode(2);
    testedB.right = new TreeNode(3);

    expect(isSameTree(testedA, testedB)).toBeFalsy();
  });
});
