/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (
    nums1.constructor.name !== "Array" ||
    nums2.constructor.name !== "Array"
  ) {
    return;
  }

  const tempSet1 = converToMap(nums1);
  const tempSet2 = converToMap(nums2);
  const result = [];

  tempSet1.forEach((val, key) => {
    if (tempSet2.has(key)) {
      const length = Math.min(val, tempSet2.get(key));
      for (let i = 0; i < length; i++) {
        result.push(key);
      }
    }
  });

  return result;
};

function converToMap(nums) {
  let tempMap = new Map();
  nums.forEach(element => {
    tempMap.set(element, tempMap.has(element) ? tempMap.get(element) + 1 : 1);
  });
  return tempMap;
}

export { intersect };
