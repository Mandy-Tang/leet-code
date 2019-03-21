/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const length = nums.length;
  let i = 0,
    j = 0;

  while (j < length) {
    while (nums[j] === 0) {
      j++;
    }
    nums[i++] = nums[j++];
  }

  const zeroCount = j - i;
  for (let i = 0; i < zeroCount; i++) {
    nums[length - zeroCount + i] = 0;
  }
};

export { moveZeroes };
