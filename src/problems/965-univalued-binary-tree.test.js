import TreeNode from "../utils/TreeNode";
import { isUnivalTree } from "./965-univalued-binary-tree";
describe("isUnivalTree", () => {
  it("should return true if the given tree is unival", () => {
    const testedTree = new TreeNode(1);
    testedTree.left = new TreeNode(1);
    testedTree.right = new TreeNode(1);
    expect(isUnivalTree(testedTree)).toBeTruthy();
    expect(isUnivalTree(null)).toBeTruthy();
  });

  it("should return false if the given tree is not unival", () => {
    const testedTree = new TreeNode(1);
    testedTree.left = new TreeNode(1);
    testedTree.right = new TreeNode(1);
    testedTree.right.right = new TreeNode(0);
    expect(isUnivalTree(testedTree)).toBeFalsy();
  });
});
