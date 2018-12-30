/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  if (!Number.isInteger(x)) {
    return;
  }
  let integer = x < 0 ? -x : x;
  let result = 0;

  while (integer !== 0) {
    result = result * 10 + (integer % 10);
    integer = Math.floor(integer / 10);
  }

  if (
    (x >= 0 && result > Math.pow(2, 31) - 1) ||
    (x < 0 && 0 - result < Math.pow(-2, 31))
  ) {
    return 0;
  }

  return x < 0 ? -result : result;
};

export { reverse };
