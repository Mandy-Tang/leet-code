/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let left = 0;
  let right = A.length - 1;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
      return mid;
    } else if (A[mid] < A[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

export { peakIndexInMountainArray };
