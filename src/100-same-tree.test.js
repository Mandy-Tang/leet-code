import { isSameTree } from "./100-same-tree";
import TreeNode from "./utils/TreeNode";

describe("Same Tree", () => {
  it("should return true if the given two tree are the same", () => {
    const treeA = new TreeNode(1);
    treeA.left = new TreeNode(2);
    treeA.right = new TreeNode(3);

    const treeB = new TreeNode(1);
    treeB.left = new TreeNode(2);
    treeB.right = new TreeNode(3);

    expect(isSameTree(treeA, treeB)).toBeTruthy();
  });

  it("should return false if the given two tree are not the same", () => {
    const treeA = new TreeNode(1);
    treeA.left = new TreeNode(2);

    const treeB = new TreeNode(1);
    treeB.left = new TreeNode(3);

    expect(isSameTree(treeA, treeB)).toBeFalsy();
  });

  it("should return true if the given two tree are all null", () => {
    const treeA = null;
    const treeB = null;

    expect(isSameTree(treeA, treeB)).toBeTruthy();
  });
});
