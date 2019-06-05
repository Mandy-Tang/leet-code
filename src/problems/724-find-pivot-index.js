/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;

  let sum = nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  let preLeftSum = 0;

  for (let i = 0; i < length; i++) {
    if (preLeftSum === sum - preLeftSum - nums[i]) {
      return i;
    }
    preLeftSum += nums[i];
  }

  return -1;
};

export { pivotIndex };
