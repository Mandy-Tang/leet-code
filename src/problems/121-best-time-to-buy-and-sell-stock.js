/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  if (!prices || prices.constructor.name !== "Array") {
    return;
  }

  if (prices.length === 0 || prices.length === 1) {
    return 0;
  }

  const length = prices.length;
  let minPrice = Number.MAX_VALUE;
  let result = Number.MIN_VALUE;
  for (let i = 0; i < length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    const gap = prices[i] - minPrice;
    if (gap > result) {
      result = gap;
    }
  }

  return result;
};

export default maxProfit;
