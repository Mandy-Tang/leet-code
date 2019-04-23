/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (
    nums1.constructor.name !== "Array" ||
    nums2.constructor.name !== "Array"
  ) {
    return;
  }

  const tempSet1 = new Set(nums1);
  const tempSet2 = new Set(nums2);
  const result = [];

  tempSet1.forEach(value => {
    if (tempSet2.has(value)) {
      result.push(value);
    }
  });

  return result;
};

export { intersection };
