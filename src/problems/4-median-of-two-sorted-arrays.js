const findMedianSortedArrays = function(nums1, nums2) {
  if (
    nums1.constructor.name !== "Array" ||
    nums2.constructor.name !== "Array" ||
    (nums1.length === 0 && nums2.length === 0)
  ) {
    console.error("error occured");
    return;
  }

  let anotherIndex;
  const mediumIndex = Math.ceil((nums1.length + nums2.length) / 2) - 1;
  if ((nums1.length + nums2.length) % 2 === 0) {
    anotherIndex = mediumIndex + 1;
  }

  let resultNums = [];
  for (let i = 0, j = 0; i < nums1.length || j < nums2.length; ) {
    if (i >= nums1.length) {
      resultNums = [...resultNums, ...nums2.slice(j, nums2.length)];
      return anotherIndex
        ? (resultNums[mediumIndex] + resultNums[anotherIndex]) / 2
        : resultNums[mediumIndex];
    }
    if (j >= nums2.length) {
      resultNums = [...resultNums, ...nums1.slice(i, nums1.length)];
      return anotherIndex
        ? (resultNums[mediumIndex] + resultNums[anotherIndex]) / 2
        : resultNums[mediumIndex];
    }

    if (resultNums.length === mediumIndex + 1) {
      return anotherIndex
        ? (resultNums[mediumIndex] + Math.min(nums1[i], nums2[j])) / 2
        : resultNums[mediumIndex];
    }

    if (nums1[i] < nums2[j]) {
      resultNums.push(nums1[i++]);
    } else {
      resultNums.push(nums2[j++]);
    }
  }
};

export default findMedianSortedArrays;
