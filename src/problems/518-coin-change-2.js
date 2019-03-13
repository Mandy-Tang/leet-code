/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  if ((!amount && amount !== 0) || typeof amount !== "number" || !coins) {
    return;
  }

  if (amount === 0) {
    return 1;
  }

  if (coins.length === 0) {
    return 0;
  }

  const coinsLength = coins.length;

  const initDP = (firstLength, secondLength, initialValue) => {
    const result = [];
    for (let i = 0; i < firstLength; i++) {
      result.push(new Array(secondLength).fill(initialValue));
    }
    return result;
  };
  const DP = initDP(coinsLength + 1, amount + 1, 0);

  for (let i = 1; i < coinsLength + 1; i++) {
    DP[i][0] = 1;
    for (let j = 1; j < amount + 1; j++) {
      DP[i][j] =
        DP[i - 1][j] + (j >= coins[i - 1] ? DP[i][j - coins[i - 1]] : 0);
    }
  }

  return DP[coinsLength][amount];
};

export { change };
