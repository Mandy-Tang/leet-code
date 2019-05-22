/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length === 0 || length === 1) {
    return 0;
  }

  let start = 0,
    end = length - 1;
  while (start < end) {
    const { min, max } = findBoundary(nums, start, end);
    if (min !== nums[start] && max !== nums[end]) {
      break;
    }
    while (min === nums[start] && start < end) {
      start++;
    }
    while (max === nums[end] && start < end) {
      end--;
    }
  }

  return end === start ? 0 : end - start + 1;
};

function findBoundary(nums, start, end) {
  let min = Number.MAX_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = start; i <= end; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }

  return { min, max };
}

export { findUnsortedSubarray };
