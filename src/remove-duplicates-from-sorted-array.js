/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  if (nums.length === 1) {
    return 1;
  }

  for (let i = 1; nums[i] !== undefined; ) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};

export { removeDuplicates };
