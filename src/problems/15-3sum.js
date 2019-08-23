/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums | (nums.constructor.name !== "Array")) {
    return;
  }

  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const element = nums[i];
    if (typeof element !== "number") {
      return;
    }
  }

  if (length < 3) {
    return [];
  }

  let result = [];

  const numsMap = new Map();
  if (nums[0] !== nums[1]) {
    numsMap.set(nums[0], 1);
    numsMap.set(nums[1], 1);
  } else {
    numsMap.set(nums[0], 2);
  }

  for (let i = 2; i < length; i++) {
    const element = nums[i];
    if (numsMap.get(element) === undefined) {
      const twoSum = findTwoSum(numsMap, 0 - element);
      twoSum.forEach(twoSumItem => {
        result.push([...twoSumItem, element]);
      });
      numsMap.set(element, 1);
    } else if (numsMap.get(element) === 1) {
      const singleTarget = 0 - element * 2;
      if (numsMap.get(singleTarget) !== undefined && element !== 0) {
        result.push([singleTarget, element, element]);
      }
      numsMap.set(element, 2);
    } else if (numsMap.get(element) === 2) {
      if (element === 0) {
        result.push([0, 0, 0]);
      }
      numsMap.set(element, 3);
    } else {
      numsMap.set(element, numsMap.get(element) + 1);
    }
  }

  return result;
};

function findTwoSum(numsMap, target) {
  const result = [];
  const tempSet = new Set();
  numsMap.forEach((value, key) => {
    const singleTarget = target - key;
    if (key === singleTarget && value >= 2) {
      result.push([key, singleTarget]);
    } else if (tempSet.has(singleTarget)) {
      result.push([key, singleTarget]);
    }
    tempSet.add(key);
  });
  return result;
}

export { threeSum };
