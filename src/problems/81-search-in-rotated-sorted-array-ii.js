/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if (nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length === 0) {
    return false;
  }

  return _search(nums, 0, length - 1, target);
};

function _search(nums, left, right, target) {
  if (left === right) {
    return nums[left] === target;
  }

  let mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) {
    return true;
  }

  if (nums[left] < nums[mid]) {
    if (nums[left] <= target && target < nums[mid]) {
      return _search(nums, left, mid, target);
    }
    return _search(nums, mid + 1, right, target);
  }

  if (nums[mid] < nums[right]) {
    if (nums[mid] < target && target <= nums[right]) {
      return _search(nums, mid + 1, right, target);
    }
    return _search(nums, left, mid, target);
  }

  return (
    _search(nums, left, mid, target) || _search(nums, mid + 1, right, target)
  );
}

export { search };
