/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const length = nums.length;
  if (length === 0) {
    return;
  }

  const rotateCount = k % length;

  if (rotateCount === 0) {
    return;
  }

  const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = nums[(length + i - rotateCount) % length];
  }

  for (let i = 0; i < length; i++) {
    nums[i] = result[i];
  }
};

export default rotate;
