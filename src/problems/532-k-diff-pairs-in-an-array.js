/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (nums.constructor.name !== "Array" || typeof k !== "number") {
    return;
  }

  if (k < 0) {
    return 0;
  }

  const length = nums.length;
  if (length === 0 || length === 1) {
    return 0;
  }

  let result = 0;
  const map = new Map();
  nums.forEach(value => {
    map.set(value, map.get(value) ? map.get(value) + 1 : 1);
  });

  map.forEach((value, key) => {
    if (k === 0) {
      if (value >= 2) {
        result++;
      }
    } else {
      if (map.has(key + k)) {
        result++;
      }
    }
  });

  return result;
};

export { findPairs };
