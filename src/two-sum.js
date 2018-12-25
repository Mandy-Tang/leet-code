const twoSum = function(nums, target) {
  if (Array.isArray(nums) && typeof target === "number") {
    const length = nums.length;
    const tempMap = new Map();
    for (let i = 0; i < length; i++) {
      const result = target - nums[i];
      if (tempMap.has(result)) {
        return [tempMap.get(result), i];
      }
      tempMap.set(nums[i], i);
    }
  }
};

export default twoSum;
