/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (typeof x !== "number" || x < 0) {
    return undefined;
  }

  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return 1;
  }

  let left = 0,
    right = x;
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid;
    } else {
      return mid;
    }
  }

  return left;
};

export { mySqrt };
