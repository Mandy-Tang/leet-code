/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  if (!pairs || pairs.constructor.name !== "Array") {
    return;
  }

  const length = pairs.length;
  if (length === 0) {
    return 0;
  }

  function getSortedPairByHead(pairs) {
    const result = new Array(...pairs);
    result.sort((pre, next) => pre[0] - next[0]);
    return result;
  }

  const sortedPairs = getSortedPairByHead(pairs);
  const DP = new Array(length).fill(1);

  for (let j = 1; j < length; j++) {
    for (let i = 0; i < j; i++) {
      if (sortedPairs[j][0] > sortedPairs[i][1]) {
        DP[j] = Math.max(DP[j], DP[i] + 1);
      }
    }
  }

  const result = DP.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });

  return result;
};

export { findLongestChain };
