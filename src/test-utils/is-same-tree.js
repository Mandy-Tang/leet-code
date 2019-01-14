const isSameTree = (treeA, treeB) => {
  if (treeA === null && treeB === null) {
    return true;
  }

  if (!treeA || !treeB) {
    return false;
  }

  return (
    treeA.val === treeB.val &&
    isSameTree(treeA.left, treeB.left) &&
    isSameTree(treeA.right, treeB.right)
  );
};

export default isSameTree;
