/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  for (let i = m - 1, j = n - 1, cur = m + n - 1; cur >= 0; ) {
    if (j < 0) {
      return;
    } else if (i < 0) {
      nums1[cur--] = nums2[j--];
    } else if (nums2[j] > nums1[i]) {
      nums1[cur--] = nums2[j--];
    } else {
      nums1[cur--] = nums1[i--];
    }
  }
};

export { merge };
