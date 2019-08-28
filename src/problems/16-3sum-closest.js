/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.constructor.name !== "Array" || typeof target !== "number") {
    return;
  }

  const length = nums.length;
  if (length < 3) {
    return;
  }

  let result;
  if (length === 3) {
    result = nums;
  } else {
    nums.sort((a, b) => a - b);
    let samllestGap = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < length - 2; i++) {
      const twoSum = twoSumClosest(nums, i + 1, target - nums[i]);
      const currentGap = Math.abs(nums[i] + twoSum[0] + twoSum[1] - target);
      if (currentGap < samllestGap) {
        result = [nums[i], ...twoSum];
        samllestGap = currentGap;
      }
    }
  }

  return result.reduce((acc, cur) => acc + cur, 0);
};

function twoSumClosest(nums, startIndex, target) {
  let left = startIndex,
    right = nums.length - 1,
    samllestGap = Number.MAX_SAFE_INTEGER,
    result;
  do {
    const currentGap = Math.abs(nums[left] + nums[right] - target);
    if (currentGap < samllestGap) {
      samllestGap = currentGap;
      result = [nums[left], nums[right]];
    }
    if (nums[left] + nums[right] > target) {
      right--;
    } else {
      left++;
    }
  } while (left < right);
  return result;
}

export { threeSumClosest };
