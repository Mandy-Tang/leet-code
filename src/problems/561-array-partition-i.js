/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  if (nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length % 2 === 1) {
    return;
  }

  if (length === 0) {
    return 0;
  }

  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; 2 * i < length; i++) {
    result += nums[2 * i];
  }
  return result;
};

export { arrayPairSum };
