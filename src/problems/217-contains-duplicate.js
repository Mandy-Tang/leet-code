/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length === 0) {
    return false;
  }

  const tempSet = new Set();

  for (let i = 0; i < length; i++) {
    if (tempSet.has(nums[i])) {
      return true;
    } else {
      tempSet.add(nums[i]);
    }
  }

  return false;
};

export { containsDuplicate };
