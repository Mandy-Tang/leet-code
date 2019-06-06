/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (!nums || nums.constructor.name !== "Array") {
    return undefined;
  }

  const length = nums.length;
  if (length === 0) {
    return -1;
  }

  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;
  let result;

  nums.forEach((val, index) => {
    if (val > largest) {
      result = index;
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest) {
      secondLargest = val;
    }
  });

  return largest >= secondLargest * 2 ? result : -1;
};

export { dominantIndex };
