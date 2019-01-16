import minDepth from "./111-minimum-depth-of-binary-tree";
import TreeNode from "../utils/TreeNode";
describe("Minimum depth of the binary tree", () => {
  it("should return 0 if the given tree is null", () => {
    expect(minDepth(null)).toBe(0);
  });

  it("should return the minimum depth of the binary tree", () => {
    const testTree = new TreeNode(1);
    testTree.left = new TreeNode(2);
    testTree.left.left = new TreeNode(3);
    testTree.right = new TreeNode(4);

    expect(minDepth(testTree)).toBe(2);
  });
});
