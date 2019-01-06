/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// const searchInsert = function(nums, target) {
//   if (
//     !nums ||
//     nums.constructor.name !== "Array" ||
//     typeof target !== "number"
//   ) {
//     return undefined;
//   }

//   const length = nums.length;

//   for (let i = 0; i < length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }

//   return length;
// };

// binary search and recursive
const searchInsert = (nums, target) => {
  if (
    !nums ||
    nums.constructor.name !== "Array" ||
    typeof target !== "number"
  ) {
    return undefined;
  }

  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0] >= target ? 0 : 1;
  }

  const length = nums.length;
  const midIndex = Math.floor(length / 2);
  if (nums[midIndex] > target) {
    return searchInsert(nums.slice(0, midIndex), target);
  } else if (nums[midIndex] < target) {
    return midIndex + searchInsert(nums.slice(midIndex, length), target);
  } else {
    return midIndex;
  }
};

export { searchInsert };
