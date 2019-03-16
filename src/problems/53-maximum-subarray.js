/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length === 0) {
    return;
  }

  if (length === 1) {
    return nums[0];
  }

  const DP = new Array(length);
  DP[0] = nums[0];
  let result = nums[0];

  for (let i = 1; i < length; i++) {
    DP[i] = Math.max(DP[i - 1] + nums[i], nums[i]);
    result = Math.max(DP[i], result);
  }

  return result;
};

export { maxSubArray };
