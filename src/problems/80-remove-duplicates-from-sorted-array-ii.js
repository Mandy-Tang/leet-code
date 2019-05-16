/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length === 0) {
    return 0;
  }

  let later = 0,
    head = 1;
  while (head < length) {
    if (nums[head] !== nums[later - 1]) {
      nums[++later] = nums[head];
    }
    head++;
  }

  return later + 1;
};

export { removeDuplicates };
