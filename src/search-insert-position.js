/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  if (
    !nums ||
    nums.constructor.name !== "Array" ||
    typeof target !== "number"
  ) {
    return undefined;
  }

  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }

  return length;
};

export { searchInsert };
