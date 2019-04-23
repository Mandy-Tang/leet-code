/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const DP = [];
  DP.push(new Array(n + 1).fill(0));
  for (let i = 1; i < m + 1; i++) {
    const temp = new Array(n + 1).fill(1);
    temp[0] = 0;
    DP.push(temp);
  }

  for (let i = 2; i < m + 1; i++) {
    for (let j = 2; j < n + 1; j++) {
      DP[i][j] = DP[i - 1][j] + DP[i][j - 1];
    }
  }

  return DP[m][n];
};

export { uniquePaths };
