/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!nums || nums.length === 0) {
    return;
  }

  const length = nums.length;

  let left = 0,
    right = length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

export { findMin };
