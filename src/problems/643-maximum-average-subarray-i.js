/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  if (!nums || nums.constructor.name !== "Array" || nums.length < k) {
    return;
  }

  const length = nums.length;
  let preSum = sum(nums, 0, k);
  let result = preSum / k;
  for (let i = 1; i + k - 1 < length; i++) {
    preSum = preSum - nums[i - 1] + nums[i + k - 1];
    result = Math.max(preSum / k, result);
  }

  return result;
};

function sum(nums, start, end) {
  let result = 0;
  for (let i = start; i < end; i++) {
    result += nums[i];
  }
  return result;
}

export { findMaxAverage };
