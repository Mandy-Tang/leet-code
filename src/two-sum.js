const twoSum = (nums, target) => {
  if (Array.isArray(nums) && typeof target === 'number') {
    const length = nums.length
    const tempMap = new Map()
    for (let i = 0; i < length; i++) {
      let result = target - nums[i]
      if (tempMap.has(result)) {
        return [tempMap.get(result), i]
      } else {
        tempMap.set(nums[i], i)
      }
    }
  }
}

export default twoSum
