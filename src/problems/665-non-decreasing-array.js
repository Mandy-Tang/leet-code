/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length === 0 || length === 1) {
    return true;
  }

  let counts = 1;
  for (let i = 0; i < length - 1 && counts >= 0; i++) {
    if (nums[i] > nums[i + 1]) {
      counts--;
      if (i === 0) {
        nums[i] = nums[i + 1];
      } else if (nums[i + 1] < nums[i - 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }

  if (counts >= 0) {
    return true;
  }

  return false;
};

export { checkPossibility };
