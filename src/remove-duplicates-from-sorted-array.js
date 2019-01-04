/**
 * splice approach
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicatesUsingSplice = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;

  if (length <= 1) {
    return length;
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

/**
 * splice approach
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;

  if (length <= 1) {
    return length;
  }

  let i = 0;

  for (let j = 1; j < length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }

  return i + 1;
};

export { removeDuplicates };
