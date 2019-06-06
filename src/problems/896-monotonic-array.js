/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  if (!A || A.constructor.name !== "Array") {
    return;
  }
  const length = A.length;

  let result = 0;
  for (let i = 1; i < length; i++) {
    if (A[i - 1] < A[i] && result === 1) {
      return false;
    }

    if (A[i - 1] > A[i] && result === -1) {
      return false;
    }

    if (A[i - 1] > A[i]) {
      result = 1;
    } else if (A[i - 1] < A[i]) {
      result = -1;
    }
  }

  return true;
};

export { isMonotonic };
