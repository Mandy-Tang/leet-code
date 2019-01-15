import TreeNode from "../utils/TreeNode";
import isSameTree from "../test-utils/is-same-tree";
import sortedArrayToBST from "./108-convert-sorted-array-to-binary-search-tree";

describe("Convert sorted array to binary search tree", () => {
  it("it should return null if the given array is empty", () => {
    expect(sortedArrayToBST([])).toBeNull();
  });

  it("should return the bst correctly", () => {
    const testedTree = new TreeNode(0);
    testedTree.left = new TreeNode(-3);
    testedTree.left.left = new TreeNode(-10);
    testedTree.right = new TreeNode(9);
    testedTree.right.left = new TreeNode(5);

    expect(
      isSameTree(sortedArrayToBST([-10, -3, 0, 5, 9]), testedTree)
    ).toBeTruthy();
  });
});
