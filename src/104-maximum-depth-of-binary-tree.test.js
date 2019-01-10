import maxDepth from "./104-maximum-depth-of-binary-tree";
import TreeNode from "./utils/TreeNode";

describe("Find the maximum depth of the binary tree", () => {
  it("should return 0 if the given tree is null", () => {
    expect(maxDepth(null)).toBe(0);
  });

  it("should return the max depth of the given tree correctly", () => {
    const testedTree = new TreeNode(1);
    testedTree.left = new TreeNode(2);
    testedTree.left.left = new TreeNode(3);
    testedTree.right = new TreeNode(4);

    expect(maxDepth(testedTree)).toBe(3);
  });
});
