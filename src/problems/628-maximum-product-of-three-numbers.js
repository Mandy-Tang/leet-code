/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  if (!nums || nums.constructor.name !== "Array" || nums.length < 3) {
    return;
  }

  let min1 = Number.MAX_SAFE_INTEGER,
    min2 = Number.MAX_SAFE_INTEGER,
    max1 = Number.MIN_SAFE_INTEGER,
    max2 = Number.MIN_SAFE_INTEGER,
    max3 = Number.MIN_SAFE_INTEGER;

  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const element = nums[i];
    if (element <= min1) {
      min2 = min1;
      min1 = element;
    } else if (element <= min2) {
      min2 = element;
    }

    if (element >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = element;
    } else if (element >= max2) {
      max3 = max2;
      max2 = element;
    } else if (element >= max3) {
      max3 = element;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};

export { maximumProduct };
