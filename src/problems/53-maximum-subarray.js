/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return;
  }

  const length = nums.length;
  if (length === 0) {
    return;
  }

  if (length === 1) {
    return nums[0];
  }

  const A = new Array(length); // A[i]: the max continuous sub array sum in [0, i] that ends up with nums[i];
  const B = new Array(length); // B[i]: the max continuous sub array sum in [0, i] that do not ends up with nums[i];
  A[0] = nums[0];
  B[0] = Number.MIN_SAFE_INTEGER;
  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < length; i++) {
    A[i] = Math.max(A[i - 1] + nums[i], nums[i]);
    B[i] = Math.max(B[i - 1], A[i - 1]);
    result = Math.max(result, A[i], B[i]);
  }

  return result;
};

export { maxSubArray };
