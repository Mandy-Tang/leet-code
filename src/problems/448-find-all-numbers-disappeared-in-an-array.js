/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  if (nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  const result = [];
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

export { findDisappearedNumbers };
