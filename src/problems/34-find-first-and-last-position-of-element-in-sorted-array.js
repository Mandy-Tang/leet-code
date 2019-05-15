/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.constructor.name !== "Array" || typeof target !== "number") {
    return;
  }

  if (nums.length === 0) {
    return [-1, -1];
  }

  return [binarySearch(nums, target, true), binarySearch(nums, target, false)];
};

function binarySearch(nums, target, isLeft) {
  let left = 0,
    right = nums.length - 1;
  let mid;
  while (left !== right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      if (isLeft) {
        right = mid;
      } else {
        if (nums[mid + 1] !== target) {
          return mid;
        }
        left = mid + 1;
      }
    }
  }
  if (nums[left] === target) {
    return left;
  }
  return -1;
}

export { searchRange };
