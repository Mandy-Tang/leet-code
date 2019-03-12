/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!nums || nums.length === 0) {
    return;
  }

  const length = nums.length;

  if (length === 1) {
    return nums[0];
  }

  if (nums[0] < nums[length - 1]) {
    return nums[0];
  }

  let left = 0,
    right = length - 1;

  while (right - left >= 1) {
    if (nums[left + 1] < nums[left]) {
      return nums[left + 1];
    }
    if (nums[right - 1] > nums[right]) {
      return nums[right];
    }

    let mid = Math.floor((left + right) / 2);

    if (nums[left] > nums[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }
};

export { findMin };
