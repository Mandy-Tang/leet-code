/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  if (!cost || cost.constructor.name !== "Array") {
    return;
  }

  const length = cost.length;
  if (length < 2) {
    return;
  }

  let f1 = 0,
    f2 = 0;
  cost.forEach(value => {
    let temp = value + Math.min(f1, f2);
    f1 = f2;
    f2 = temp;
  });

  return Math.min(f1, f2);

  // const DP = [];
  // DP[0] = cost[0];
  // DP[1] = cost[1];
  // for (let i = 2; i < length + 1; i++) {
  //   DP[i] = cost[i] + Math.min(DP[i - 1], DP[i - 2])
  // }

  // return Math.min(DP[length - 1], DP[length -2]);
};

export { minCostClimbingStairs };
