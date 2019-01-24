/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const length = nums.length;
  const map = new Map();
  for (let i = 0; i < length; i++) {
    let item = nums[i];
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
    if (map.get(item) > Math.floor(length / 2)) {
      return item;
    }
  }
};

export default majorityElement;
