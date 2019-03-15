/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || nums.constructor.name !== "Array" || (!target && target !== 0)) {
    return;
  }

  const length = nums.length;

  if (!length) {
    return -1;
  }

  let left = 0,
    right = length - 1;
  while (true) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target === nums[left]) {
      return left;
    }

    if (target === nums[right]) {
      return right;
    }

    if (nums[left] < target && target < nums[mid]) {
      right = mid - 1;
      continue;
    }

    if (nums[mid] < target && target < nums[right]) {
      left = mid + 1;
      continue;
    }

    if (nums[left] > nums[mid]) {
      right = mid - 1;
      continue;
    }

    if (nums[mid] > nums[right]) {
      left = mid + 1;
      continue;
    }

    return -1;
  }
};

export { search };
