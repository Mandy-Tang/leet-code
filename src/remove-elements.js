/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (
    !nums ||
    nums.constructor.name !== "Array" ||
    (val !== null && val !== undefined && Number.isNaN(val))
  ) {
    return undefined;
  }

  const length = nums.length;
  if (length === 0 || val === null || val === undefined) {
    return length;
  }

  let nearIndex = 0;

  for (let farIndex = 0; farIndex < length; farIndex++) {
    if (nums[farIndex] !== val) {
      nums[nearIndex++] = nums[farIndex];
    }
  }

  return nearIndex;
};

export { removeElement };
