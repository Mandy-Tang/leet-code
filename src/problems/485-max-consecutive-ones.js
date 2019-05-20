/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  if (nums.constructor.name !== "Array") {
    return;
  }

  let result = 0,
    currentCount = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    result = Math.max(result, currentCount);
    currentCount = nums[i] === 0 ? 0 : currentCount + 1;
  }
  return Math.max(result, currentCount);
};

export { findMaxConsecutiveOnes };
