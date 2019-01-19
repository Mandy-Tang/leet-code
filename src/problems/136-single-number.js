/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const tempSet = new Set();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (tempSet.has(nums[i])) {
      tempSet.delete(nums[i]);
    } else {
      tempSet.add(nums[i]);
    }
  }

  if (tempSet.size === 1) {
    for (let i of tempSet) {
      return i;
    }
  }
  return 0;
};

export default singleNumber;
