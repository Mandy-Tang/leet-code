/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  if (!digits || digits.constructor.name !== "Array") {
    return undefined;
  }

  const length = digits.length;
  if (length === 0) {
    return [1];
  }

  let result = [...digits];
  let sum;
  let carry = 1;

  for (let i = length - 1; i >= 0; i--) {
    sum = result[i] + carry;
    carry = sum < 10 ? 0 : 1;
    result[i] = carry ? sum % 10 : sum;
    if (!carry) {
      return result;
    }
  }
  return [1, ...result];
};

export { plusOne };
