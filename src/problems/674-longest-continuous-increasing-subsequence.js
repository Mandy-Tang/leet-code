/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length === 0) {
    return length;
  }

  let result = 1;
  let currentLength = 1;
  nums.forEach((value, index) => {
    if (nums[index + 1] > value) {
      currentLength++;
      result = Math.max(result, currentLength);
    } else {
      currentLength = 1;
    }
  });

  return result;
};

export { findLengthOfLCIS };
