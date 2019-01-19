/**
 * @param {number[]} prices
 * @return {number}
 */
// const maxProfit = function(prices) {
//   if (!prices || prices.constructor.name !== "Array") {
//     return undefined;
//   }

//   const length = prices.length;

//   if (length < 2) {
//     return 0;
//   }

//   let minPrice = Number.MAX_VALUE;
//   let maxPrice = Number.MIN_VALUE;
//   let sum = 0;

//   for (let i = 0; i < length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else if (prices[i] >= maxPrice) {
//       maxPrice = prices[i];
//       if (i < length - 1 && prices[i + 1] < prices[i]) {
//         sum += maxPrice - minPrice;
//         minPrice = Number.MAX_VALUE;
//         maxPrice = Number.MIN_VALUE;
//       }
//     }
//   }

//   if (minPrice !== Number.MAX_VALUE && maxPrice !== Number.MIN_VALUE) {
//     sum += maxPrice - minPrice;
//   }

//   return sum;
// };

const maxProfit = prices => {
  if (!prices || prices.constructor.name !== "Array") {
    return;
  }

  const length = prices.length;
  if (length < 2) {
    return 0;
  }

  let sum = 0;
  let vally, peak;

  for (let i = 0; i < length - 1; ) {
    while (i < length - 1 && prices[i + 1] <= prices[i]) {
      i++;
    }
    vally = prices[i];
    while (i < length - 1 && prices[i + 1] >= prices[i]) {
      i++;
    }
    peak = prices[i];
    sum += peak - vally;
  }

  return sum;
};
export default maxProfit;
