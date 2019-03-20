/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if ((!num && num !== 0) || typeof num !== "number") {
    return;
  }

  if (num <= 0 || num !== Math.floor(num / 1)) {
    return false;
  }

  for (let i of [2, 3, 5]) {
    while (num % i === 0) {
      num = num / i;
    }
    if (num === 1) {
      return true;
    }
  }

  return false;
};

export { isUgly };
