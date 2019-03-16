/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (!nums || nums.constructor.name !== "Array" || typeof k !== "number") {
    return;
  }

  const length = nums.length;
  if (length <= 1 || k === 0) {
    return false;
  }

  const tempMap = new Map();
  for (let i = 0; i < length; i++) {
    if (tempMap.has(nums[i])) {
      if (i - tempMap.get(nums[i]) <= k) {
        return true;
      }
    }
    tempMap.set(nums[i], i);
  }

  return false;
};

export { containsNearbyDuplicate };
