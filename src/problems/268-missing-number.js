/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const length = nums.length;
  if (length === 0) {
    return 0;
  }

  const sum = nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const expectedSum = ((length + 1) * length) / 2;

  return expectedSum - sum;
};

export { missingNumber };
